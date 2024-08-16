import InfoResponse from "../../util/response/info_response";
import { Request, Response } from "express";

export default class DashboardController {
    async index(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async create(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async show(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async update(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async delete(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
}