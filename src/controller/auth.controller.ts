import { Request, Response } from 'express'
import SuccessReponse from '../util/response/success_response'
import { ApiKeyModel, AuthService } from '../service/auth.service'
import CryptoUtil from '../util/crypto.util'

export default class AuthController {
    async oauth2(req: Request, res: Response) {
        const auth_service = new AuthService()
        const api_key_model = new ApiKeyModel()



        api_key_model.setUsername('hadi@tennet.id')
        api_key_model.setApi_key('e0d684e76ebf4dc4bf9911e8ede4e61d')
        api_key_model.setSignature(CryptoUtil.sha256(api_key_model.getApi_key()+api_key_model.getTimestamp()))
        api_key_model.setGrant_type('api_user')
        api_key_model.setTimestamp(Date.now().toString())
        api_key_model.setAuthorization(atob('asdfghjkerty').toString())

        console.log((api_key_model.getAuthorization()));
        

        const oauth2 = await auth_service.oauth2(api_key_model)

        SuccessReponse.oauth2_success(res, oauth2)

    }

}


	
// string
// Example: signature=35690b5d6abe901332a9e3c99395d749ab1b1b8b22920f6566119429bddc719c
// apikey signature, signature =（sha256(apikey + timestamp)）

	
// string
// Example: Basic YmFzaWMgYmVhcmVyIDEyMzQ1Ng==
// the header parameter Authorization=(Basic + auth), auth = base64( clientID + : + clientSecret)