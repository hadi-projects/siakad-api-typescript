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
        const request = new UserModel()
        const user_repo = new UserRepository()
        const response = new UserModel()

        request.setEmail(req.body["email"]).setPassword(req.body["password"])

        if (!request.validateLogin(request)) return FailedResponse.loginFailed(res)

        const user = await user_repo.show(Keyval.setKeyVal('email', request.getEmail()))
        if (user.getId() == null) return FailedResponse.loginFailed(res)

        if (!CryptoUtil.comparePassword(request.getPassword(), user.getPassword())) return FailedResponse.loginFailed(res)
        else if (user.getStatus().getName().toLocaleLowerCase() == "freezed") return FailedResponse.userFreezed(res, '')

        response.setVerifyToken(randomBytes(24).toString('hex'))
        response.setId(user.getId())

        const result = await user_repo.edit(response)
        if (result == false) return FailedResponse.loginFailed(res)

        response.setStatus(user.getStatus())

        return SuccessReponse.login(res, response)
    }
    
    logout(req: Request, res: Response) {

        // deactivate jwt token
        InfoResponse.progress(res)
    }
}