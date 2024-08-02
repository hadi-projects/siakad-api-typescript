import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import CryptoUtil from '../../util/crypto.util'
import SuccessReponse from '../../util/response/success_response'
import { randomBytes } from 'crypto'
import FailedResponse from '../../util/response/failed_response'


export default class AuthController {
    async login(req: Request, res: Response) {
        
        if (!new UserModel().validate_empty([req.body['email'], req.body['password']]))
            return FailedResponse.validationFailed(res)

        var user = await new UserModel()
        .add_select(['password', 'status_id'])
        .add_where('email','=', req.body['email'])
        .show()

        console.log(user);
        
        
        if (!CryptoUtil.comparePassword(req.body["password"], user.password))
            return FailedResponse.loginFailed(res)
        
        if (user.status_id == 4)
            return FailedResponse.userFreezed(res, '')
        
        new UserModel()
        .set_verify_token(randomBytes(24).toString('hex'))
        .add_where('email', '=', req.body['email'])
        .update()
        
        const data = await new UserModel().set_id(user.id)
        .add_where('email','=', req.body['email'])
        .add_select(['id', 'status_id', 'email', 'verify_token'])
        .show()

        return SuccessReponse.login(res, data)
    }

    logout(req: Request, res: Response) {

        // deactivate jwt token
        InfoResponse.progress(res)
    }
}