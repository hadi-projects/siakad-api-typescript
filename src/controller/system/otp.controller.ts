import { Request, Response } from "express"
import UserRepository from "../../repository/user.repository"
import UserModel from "../../model/user.model"
import FailedResponse from "../../util/response/failed_response"
import SuccessReponse from "../../util/response/success_response"
import KeyVal from "../../model/keyval.model"
import CryptoUtil from "../../util/crypto.util"

export default class OtpController {

    async generate2fa(req: Request, res: Response) {
        const user_repo = new UserRepository()
        const request = new UserModel()
        const response = new UserModel()
        const keyval = new KeyVal()

        request.setVerifyToken(req.body['verify_token'])

        keyval.setKey('verify_token')
        keyval.setValue(request.getVerifyToken())

        if (!request.validateVToken(request)) return FailedResponse.paramRequestFailed(res, "")
        
        const user: UserModel = await user_repo.show(keyval)
        if (user.getId() == null) return FailedResponse.queryFailed(res, '')
        if (user.getStatus().getName() == 'ACTIVE') return FailedResponse.statusFailed(res, '')


        // when secret exist
        if (user.getSecretKey() !== "" && user.getStatus().getId() == "2") {

            const dec_secret = CryptoUtil.decryptSecret(user.getSecretKey())
            const dec_uri = CryptoUtil.decryptOtpauthUrl(user.getOtpauthUrl())

            const status = await user_repo.create_token(user)
            if (status == null) return FailedResponse.queryFailed(res, '')

            response.setSecretKey(dec_secret)
            response.setOtpauthUrl(dec_uri)
            response.setVerifyToken(user.getVerifyToken())

            return SuccessReponse.generate2fa(res, response)
        }
        // when secret not exist
        const raw = CryptoUtil.hashedOtp(user.getEmail())
        const raw_secret = raw.secret
        const raw_uri = CryptoUtil.hashedOtpauthUrl(raw.uri)
        const dec_secret = CryptoUtil.decryptSecret(raw_secret)
        const dec_uri = CryptoUtil.decryptOtpauthUrl(raw_uri)
        console.log(raw);
        

        const result = await user_repo.create_otp(user)
        
        if (result == false) return FailedResponse.queryFailed(res, '')

        const verify_token = await user_repo.create_token(user)
        if (verify_token == null) return FailedResponse.queryFailed(res, '')

        response.setSecretKey(dec_secret)
        response.setOtpauthUrl(dec_uri)
        response.setVerifyToken(user.getVerifyToken())

        return SuccessReponse.generate2fa(res, response)
    }
    verify(){}
    reset(){}

}