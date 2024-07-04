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
        const request = new UserModel()
        const response = new UserModel()
        const keyval = new KeyVal()
        const status_model = new StatusModel()

        request.setVerifyToken(req.body['verify_token'])

        keyval.setKey('verify_token')
        keyval.setValue(request.getVerifyToken())

        if (!request.validateVToken(request)) return FailedResponse.paramRequestFailed(res, "")

        const user: UserModel = await user_repo.show(keyval)
        if (user.getId() == null) return FailedResponse.verifyTokenExpired(res)
        if (user.getStatus().getName() == 'ACTIVE') return FailedResponse.statusFailed(res, '')

        user.setVerifyToken(randomBytes(24).toString('hex'))

        // when secret exist
        if (user.getSecretKey() != null && user.getOtpauthUrl() != null) {
            const dec_secret = CryptoUtil.decryptSecret(user.getSecretKey())
            const dec_uri = CryptoUtil.decryptOtpauthUrl(user.getOtpauthUrl())
            
            const status = await user_repo.create_token(user)
            if (status == null) return FailedResponse.queryFailed(res, '')
                
                response.setSecretKey(dec_secret)
                response.setOtpauthUrl(dec_uri)
                response.setVerifyToken(user.getVerifyToken())
                
                return SuccessReponse.generate2fa(res, response)
            }
        const raw = CryptoUtil.generateOtp(user.getEmail())
        const encrypted_secret = CryptoUtil.encryptSecret(raw.secret)
        const encrypted_uri = CryptoUtil.hashedOtpauthUrl(raw.uri)

        user.setSecretKey(encrypted_secret)
        user.setOtpauthUrl(encrypted_uri)
        user.setStatus(status_model) // verify otp

        const result = await user_repo.create_otp(user)
        if (result == false) return FailedResponse.queryFailed(res, '')

        const verify_token = await user_repo.create_otp(user)
        if (verify_token == null) return FailedResponse.queryFailed(res, '')

        response.setSecretKey(raw.secret)
        response.setOtpauthUrl(raw.uri)
        response.setVerifyToken(user.getVerifyToken())

        return SuccessReponse.generate2fa(res, response)
    }
    async verify(req: Request, res: Response) {
        const user_repo = new UserRepository()
        const request = new UserModel()
        const response = new UserModel()
        const keyval = new KeyVal()
        const status_model = new StatusModel()

        request.setVerifyToken(req.body['verify_token'])
        request.setOtp(req.body['otp_code'])
        if (!request.validateVerifyOtp(request)) return FailedResponse.paramRequestFailed(res, "")

        keyval.setKey('verify_token')
        keyval.setValue(request.getVerifyToken())

        const user: UserModel = await user_repo.show(keyval)
        if (user.getId() == null) return FailedResponse.queryFailed(res, '')

        // verify otp
        let result = CryptoUtil.verifyOtp(user.getSecretKey(), request.getOtp())
        if (result == false) return FailedResponse.otpFailed(res)

        // update status 
        user.setVerifyToken('')
        status_model.setStatus_id("3") // active
        user.setStatus(status_model)
        user.setOtpVerifiedAt(moment().format())

        result = await user_repo.verified_otp(user)
        if (result == false) return FailedResponse.queryFailed(res, '')

        response.setJwtToken(JwtService.generate_jwt(user.getId()))

        return SuccessReponse.verifyOtpSuccess(res, response)
    }
    reset() { }

}