import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import CryptoUtil from '../../util/crypto.util'
import SuccessReponse from '../../util/response/success_response'
import { randomBytes } from 'crypto'
import FailedResponse from '../../util/response/failed_response'
import KeyVal from '../../model/keyval.model'


export default class AuthController {
    async login(req: Request, res: Response) {
        
        if (!new UserModel().validate_empty([req.body['email'], req.body['password']]))
            return FailedResponse.validationFailed(res)

        var user = await new UserModel().set_email(req.body['email']).show(['id', 'password', 'status_id', 'email'])

        if (!CryptoUtil.comparePassword(req.body["password"], user.password))
            return FailedResponse.loginFailed(res)

        if (user.status_id == 4)
        return FailedResponse.userFreezed(res, '')

        new UserModel()
            .set_verify_token(randomBytes(24).toString('hex'))
            .update()

        const data = await new UserModel().set_email(req.body['email']).show(['id', 'email', 'status_id', 'verify_token'])

        return SuccessReponse.login(res, data)
    }

    logout(req: Request, res: Response) {

        // deactivate jwt token
        InfoResponse.progress(res)
    }
}