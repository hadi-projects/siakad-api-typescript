import {Request, Response} from 'express'
import InfoResponse from '../util/response/info_response'

export default class WalletController {
    index(req:Request, res:Response){        
        InfoResponse.progress(res)
    }
    create(req:Request, res:Response){
        InfoResponse.progress(res)
    }
    show(req:Request, res:Response){
        InfoResponse.progress(res)
    }
    delete(req:Request, res:Response){
        InfoResponse.progress(res)
    }
}