import { Request, Response } from "express"
import UserRepository from "../../repository/user.repository"
import UserModel from "../../model/user.model"
import FailedResponse from "../../util/response/failed_response"
import SuccessReponse from "../../util/response/success_response"
import KeyVal from "../../model/keyval.model"
import CryptoUtil from "../../util/crypto.util"
import StatusModel from "../../model/status.model"
import { randomBytes } from "crypto"
import moment from "moment"
import JwtService from "../../service/jwt.service"

export default class OtpController {

    async generate2fa(req: Request, res: Response) {
        const user_repo = new UserRepository()
        const response = new UserModel()

        const user: UserModel = await user_repo.show(KeyVal.setKeyVal('verify_token', req.body['verify_token']))
        if (user.getId() == null) return FailedResponse.verifyTokenExpired(res)
        if (user.getStatus().get_name() == 'ACTIVE') return FailedResponse.statusFailed(res, '')

        // when secret not exist
        // create new one
        
        if (user.getSecretKey() == null && user.getOtpauthUrl() == null) {
            const raw = CryptoUtil.generateOtp(user.getEmail())
            const encrypted_secret = CryptoUtil.encryptSecret(raw.secret)
            const encrypted_uri = CryptoUtil.hashedOtpauthUrl(raw.uri)

            user.setSecretKey(encrypted_secret)
                .setOtpauthUrl(encrypted_uri)
                .setStatus(new StatusModel().set_id("2"))

            const result = await user_repo.edit(user)
            if (result == false) return FailedResponse.queryFailed(res, '')

            response.setSecretKey(raw.secret)
                .setOtpauthUrl(raw.uri)
                .setVerifyToken(randomBytes(24).toString('hex'))

            return SuccessReponse.generate2fa(res, response)
        }
        //  else return existed otp
        response.setSecretKey(CryptoUtil.decryptSecret(user.getSecretKey()))
            .setOtpauthUrl(CryptoUtil.decryptOtpauthUrl(user.getOtpauthUrl()))
            .setVerifyToken(user.getVerifyToken())

        return SuccessReponse.generate2fa(res, response)
    }



    async verify(req: Request, res: Response) {
        const user_repo = new UserRepository()
        let user = new UserModel()
        const response = new UserModel()

        user.setVerifyToken(req.body['verify_token'])
            .setOtp(req.body['otp_code'])

        if (!user.validateVerifyOtp(user)) return FailedResponse.paramRequestFailed(res, "")

        user = await user_repo.show(KeyVal.setKeyVal('verify_token', user.getVerifyToken()))
        if (user.getId() == null) return FailedResponse.queryFailed(res, '')

        console.log(user);

        // verify otp
        let result = CryptoUtil.verifyOtp(user.getSecretKey(), req.body['otp_code'])
        if (result == false) return FailedResponse.otpFailed(res)

        // update status 
        user.setVerifyToken('')
        user.setStatus(new StatusModel().set_id("3"))
        user.setOtpVerifiedAt()

        result = await user_repo.edit(user)
        if (result == false) return FailedResponse.queryFailed(res, '')

        response.setJwtToken(JwtService.generate_jwt(user.getId()))

        return SuccessReponse.verifyOtpSuccess(res, response)
    }
    reset() { }

}