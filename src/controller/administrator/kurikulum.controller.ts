import {Request, Response} from 'express'
import InfoResponse from '../../util/response/info_response'


export default class KurikulumController {
    async index(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async create(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async show(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async edit(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async delete(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
}