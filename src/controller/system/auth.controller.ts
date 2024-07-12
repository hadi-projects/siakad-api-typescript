import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import Keyval from '../../model/keyval.model'
import UserRepository from '../../repository/user.repository'
import CryptoUtil from '../../util/crypto.util'
import SuccessReponse from '../../util/response/success_response'
import { randomBytes } from 'crypto'
import FailedResponse from '../../util/response/failed_response'
import StatusModel from '../../model/status.model'
// import OtpModel from '../../model/otp.model'


export default class AuthController {
    async login(req: Request, res: Response) {
        let user = new UserModel()

        user.set_email(req.body["email"])
            .set_password(req.body["password"])

        if (!user.validateLogin(user)) return FailedResponse.loginFailed(res)

        user = await user.show() as UserModel

        if (!CryptoUtil.comparePassword(req.body["password"], user.get_password())) return FailedResponse.loginFailed(res)
        if (user.get_status().get_name().toLocaleLowerCase() == "freezed") return FailedResponse.userFreezed(res, '')

        new UserModel().set_verify_token(randomBytes(24).toString('hex'))
            .set_status(user.get_status())
            .update()

        return SuccessReponse.login(res, new UserModel().set_email(user.get_verify_token()))
    }

    logout(req: Request, res: Response) {

        // deactivate jwt token
        InfoResponse.progress(res)
    }
}