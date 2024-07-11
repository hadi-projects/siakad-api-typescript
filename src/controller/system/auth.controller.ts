import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import Keyval from '../../model/keyval.model'
import UserRepository from '../../repository/user.repository'
import CryptoUtil from '../../util/crypto.util'
import SuccessReponse from '../../util/response/success_response'
import { randomBytes } from 'crypto'
import FailedResponse from '../../util/response/failed_response'
// import OtpModel from '../../model/otp.model'


export default class AuthController {
    async login(req: Request, res: Response) {


        //

        console.log('---');
        
        
        // const otp = new OtpModel()
        // otp.create()
        
        console.log('---');
        //
        const user_repo = new UserRepository()
        let user = new UserModel()

        user.setEmail(req.body["email"])
            .setPassword(req.body["password"])

        if (!user.validateLogin(user)) return FailedResponse.loginFailed(res)

        user = (await user_repo.show(Keyval.setKeyVal('email', user.getEmail())))
        if (user.getId() == null) return FailedResponse.loginFailed(res)

        if (!CryptoUtil.comparePassword(req.body["password"], user.getPassword())) return FailedResponse.loginFailed(res)
        if (user.getStatus().getName().toLocaleLowerCase() == "freezed") return FailedResponse.userFreezed(res, '')



        user.setVerifyToken(randomBytes(24).toString('hex'))
            .setId(user.getId())
            .setStatus(user.getStatus())
            .removeName()
            .removeSecretKey()
            .removeOtpauthUrl()
            .removePassword()
            .removeCreatedAt()
            .removeUpdatedAt()

        const result = await user_repo.edit(user)
        if (result == false) return FailedResponse.loginFailed(res)

        return SuccessReponse.login(res, user)
    }

    logout(req: Request, res: Response) {

        // deactivate jwt token
        InfoResponse.progress(res)
    }
}