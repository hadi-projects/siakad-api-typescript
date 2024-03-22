import {Request, Response} from 'express'
import InfoResponse from '../../util/response/info_response'

export default class AuthController {
    login(req:Request, res:Response){     
        console.log('login');
           
        InfoResponse.progress(res)
    }
    logout(req:Request, res:Response){
        InfoResponse.progress(res)
    }
}