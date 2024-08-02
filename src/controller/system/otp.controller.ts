import { Request, Response } from "express"
import UserModel from "../../model/user.model"
import FailedResponse from "../../util/response/failed_response"
import SuccessReponse from "../../util/response/success_response"
import CryptoUtil from "../../util/crypto.util"
import JwtService from "../../service/jwt.service"
import KeyVal from "../../model/keyval.model"
import { randomBytes } from "crypto"
import StatusModel from "../../model/status.model"

export default class OtpController {

    async generate2fa(req: Request, res: Response) {
        if (!new UserModel().validate_empty([req.body['verify_token']]))
            return FailedResponse.validationFailed(res)

        const user = await new UserModel()
            // .add_where('verify_token', '=', req.body['verify_token'])
            // .add_select(['id', 'secret_key', 'status_id', 'email'])
            .show()

        if (user == null) return FailedResponse.verifyTokenExpired(res)

        // when secret not exist
        // create new one
        if (user.secret_key == null && user.otpauth_url == null || user.secret_key == "" && user.otpauth_url == "") {
            const raw = CryptoUtil.generateOtp(user.email)
            const encrypted_secret = CryptoUtil.encryptSecret(raw.secret)
            const encrypted_uri = CryptoUtil.hashedOtpauthUrl(raw.uri)

            await new UserModel().set_id(user.id).set_secret_key(encrypted_secret)
                .set_otpauth_url(encrypted_uri)
                .set_status(new StatusModel().set_id('2'))
                .set_verify_token(randomBytes(24).toString('hex'))
                .update()

            var data = await new UserModel().set_id(user.id)
                // .add_where('verify_token', '=', req.body['verify_token'])
                // .add_select(['id', 'secret_key', 'otpauth_url', 'verify_token'])
                .show()

                console.log("===")
                console.log(data)

            data = new UserModel().set_id(user.id)
                .set_secret_key(CryptoUtil.decryptSecret(user.secret_key))
                .set_otpauth_url(CryptoUtil.decryptOtpauthUrl(data.otpauth_url))
                .set_verify_token(data.verify_token)
                .remove_table_name()
                .remove_values()
                .remove_selects()
                .remove_wheres()
                .update()

            data.remove_table_name
            data.remove_values

            return SuccessReponse.generate2fa(res, data)
        }

        await new UserModel().set_id(user.id)
            .set_verify_token(randomBytes(24).toString('hex'))
            .update()

        var data = await new UserModel()
            // .add_where('id', '=', user.id)
            // .add_select(['id', 'secret_key', 'otpauth_url', 'verify_token'])
            .show()

        data = new UserModel().set_id(user.id)
            .set_secret_key(CryptoUtil.decryptSecret(user.secret_key))
            .set_otpauth_url(CryptoUtil.decryptOtpauthUrl(data.otpauth_url))
            .set_verify_token(data.verify_token)
            .remove_table_name()
            .remove_values()

        data.remove_table_name()
        data.remove_values()
        data.remove_selects()
        data.remove_wheres()

        return SuccessReponse.generate2fa(res, data)
    }



    async verify(req: Request, res: Response) {

        // TODO
        // set maximal hit 5x

        if (new UserModel().validate_empty([req.body['verify_token'], req.body['otp_code']]) == false)
            return FailedResponse.validationFailed(res)

        const user = await new UserModel()
            // .add_where('verify_token', '=', req.body['verify_token'])
            // .add_select(['id', 'secret_key', 'status_id', 'email'])
            .show()

        console.log(user)

        // verify otp
        if (!CryptoUtil.verifyOtp(user.secret_key, req.body['otp_code']))
            return FailedResponse.otpFailed(res)

        // update status 
        new UserModel()
            .set_status(new StatusModel().set_id("3"))
            .set_otp_verified_at()
            .set_verify_token('')
            // .add_where('id', '=', user.id)
            .update()

        return SuccessReponse.verifyOtpSuccess(res, JwtService.generate_jwt(user.id))
    }
    reset(req: Request, res: Response) {
        if (new UserModel().validate_empty([req.body['id']]) == false)
            return FailedResponse.validationFailed(res)

        // update status 
        new UserModel()
            .set_status(new StatusModel().set_id("3"))
            .set_otp_verified_at()
            .set_verify_token('')
            // .add_where('id', '=', req.body['id'])
            .update()

        return SuccessReponse.resetSuccess(res, JwtService.generate_jwt("1"))
    }

}