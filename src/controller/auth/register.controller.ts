import InfoResponse from "../../util/response/info_response";
import { Request, Response } from "express";


export default class AuthController {
    async register(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async login(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
}