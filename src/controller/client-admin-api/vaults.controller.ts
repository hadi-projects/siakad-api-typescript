import InfoResponse from "../../util/response/info_response";
import { Request, Response } from "express";

export default class VaultsController {
    async index(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async show(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
}