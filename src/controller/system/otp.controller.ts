import { Request, Response } from "express"
import UserRepository from "../../repository/user.repository"
import UserModel from "../../model/user.model"
import FailedResponse from "../../util/response/failed_response"
import SuccessReponse from "../../util/response/success_response"
import KeyVal from "../../model/keyval.model"
import CryptoUtil from "../../util/crypto.util"
import StatusModel from "../../model/status.model"
import { randomBytes } from "crypto"
import JwtService from "../../service/jwt.service"

export default class OtpController {

    async generate2fa(req: Request, res: Response) {

        const user: UserModel = await new UserModel().set_verify_token(req.body['verify_token'])
            .show() as UserModel

        if (user.get_id() == null) return FailedResponse.verifyTokenExpired(res)
        if (user.get_status().get_name() == 'ACTIVE') return FailedResponse.statusFailed(res, '')

        // when secret not exist
        // create new one
        
        if (user.get_secret_key() == null && user.get_otpauth_url() == null) {
            const raw = CryptoUtil.generateOtp(user.get_email())
            const encrypted_secret = CryptoUtil.encryptSecret(raw.secret)
            const encrypted_uri = CryptoUtil.hashedOtpauthUrl(raw.uri)

            user.set_secret_key(encrypted_secret)
                .set_otpauth_url(encrypted_uri)
                .set_status(new StatusModel().set_id("2"))

        //     const result = await user_repo.edit(user)
        //     if (result == false) return FailedResponse.queryFailed(res, '')

        //     response.set_secret_key(raw.secret)
        //         .set_otpauth_url(raw.uri)
        //         .set_verify_token(randomBytes(24).toString('hex'))

        //     return SuccessReponse.generate2fa(res, response)
        // }
        // //  else return existed otp
        // response.set_secret_key(CryptoUtil.decryptSecret(user.get_secret_key()))
        //     .set_otpauth_url(CryptoUtil.decryptOtpauthUrl(user.get_otpauth_url()))
        //     .set_verify_token(user.get_verify_token())

        // return SuccessReponse.generate2fa(res, response)
    }}



    async verify(req: Request, res: Response) {
        const user_repo = new UserRepository()
        let user = new UserModel()
        const response = new UserModel()

        user.set_verify_token(req.body['verify_token'])
            .set_otp(req.body['otp_code'])

        if (!user.validateVerifyOtp(user)) return FailedResponse.paramRequestFailed(res, "")

        // user = await user_repo.show(KeyVal.setKeyVal('verify_token', user.get_verify_token()))
        if (user.get_id() == null) return FailedResponse.queryFailed(res, '')

        console.log(user);

        // verify otp
        let result = CryptoUtil.verifyOtp(user.get_secret_key(), req.body['otp_code'])
        if (result == false) return FailedResponse.otpFailed(res)

        // update status 
        user.set_verify_token('')
        user.set_status(new StatusModel().set_id("3"))
        user.set_otp_verified_at()

        result = await user_repo.edit(user)
        if (result == false) return FailedResponse.queryFailed(res, '')

        response.set_jwt_token(JwtService.generate_jwt(user.get_id()))

        return SuccessReponse.verifyOtpSuccess(res, response)
    }
    reset() { }

}