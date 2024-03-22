import {Request, Response} from 'express'
import InfoResponse from '../../util/response/info_response'


export default class UtilController {
    async ping(req:Request, res:Response): Promise<any> {
        InfoResponse.ping(res)
    }
}