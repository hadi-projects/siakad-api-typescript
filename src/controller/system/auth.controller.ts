import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import Keyval from '../../model/keyval.model'
import UserRepository from '../../repository/user.repository'
import CryptoUtil from '../../util/crypto.util'
import SuccessReponse from '../../util/response/success_response'
import { randomBytes } from 'crypto'
import FailedResponse from '../../util/response/failed_response'


export default class AuthController {
    async login(req: Request, res: Response) {
        const user_model = new UserModel()
        const keyval = new Keyval()
        const user_repo = new UserRepository()
        const response = new UserModel()

        user_model.setEmail(req.body["email"])
        user_model.setPassword(req.body["password"])

        if (!user_model.validateLogin(user_model)) return FailedResponse.loginFailed(res)

        keyval.setKey("email")
        keyval.setValue(user_model.getEmail())

        if (!keyval.validate(keyval)) return FailedResponse.keyvalFailed(res, '')

        const user = await user_repo.show(keyval)
        if (user.getId == null) return FailedResponse.loginFailed(res)

        const compare = CryptoUtil.comparePassword(user_model.getPassword(), user.getPassword())
        console.log(compare);


        if (compare == false) return FailedResponse.loginFailed(res)
        if (user.getStatus().getName().toLocaleLowerCase() == "freezed") return FailedResponse.userFreezed(res, '')
        console.log(1);


        response.setVerifyToken(randomBytes(24).toString('hex'))
        response.setId(user.getId())

        const result = await user_repo.create_token(response)
        console.log(result);

        if (result == false) return FailedResponse.loginFailed(res)
        console.log(2)

        response.setStatus(user.getStatus())
        response.setStatus(user.getStatus())

        return SuccessReponse.login(res, response)
    }
    
    logout(req: Request, res: Response) {
        InfoResponse.progress(res)
    }
}