import CarModel from "../../model/car.model";
import InfoResponse from "../../util/response/info_response";
import { Request, Response } from "express";
import SuccessReponse from "../../util/response/success_response";
import JwtService from "../../service/jwt.service";

export default class CarController {
    async index(req:Request, res:Response): Promise<any> {
        const reports = await new CarModel()
            .set_limit(req.body['limit'])
            .add_select(['id', 'report_date', 'asset_name', 'asset_symbol', 'volume'])
            .index()
        SuccessReponse.getDataSuccess(res, reports, JwtService.generate_jwt("1"))
    }


    async create(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }


    async import(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }


    async delete(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }

    
    async bulk_delete(req:Request, res:Response): Promise<any> {
        InfoResponse.progress(res)
    }
}