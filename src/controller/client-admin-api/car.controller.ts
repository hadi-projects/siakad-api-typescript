import CarModel from "../../model/car.model";
import InfoResponse from "../../util/response/info_response";
import { Request, Response } from "express";
import SuccessReponse from "../../util/response/success_response";
import JwtService from "../../service/jwt.service";
import PaginationModel from "../../model/pagination.model";

export default class CarController {
    async index(req: Request, res: Response): Promise<any> {
        const pagination = new PaginationModel()
            .set_limit(req.body['limit'])
            .set_offset(req.body['offset'])
            .set_order(req.body['order'])
            .set_search(req.body['search'])

        const query = new CarModel()
            .add_select(['crypto_asset_reports.id','report_date', 'asset_name', 'asset_symbol', 'volume'])
            .add_join('join', 'kyb_institutes', 'kyb_institutes.id', '=', 'crypto_asset_reports.kyb_institute_id')
            .add_join('join', 'client_bases', 'client_bases.id', '=', 'kyb_institutes.client_base_id')
            .add_where('client_bases.id', '=', '1')
            .set_pagination(pagination)

        const data = await query.index()
        const len = await query.count()

        pagination.set_len(len[0]['count(*)'])
        pagination.set_page(len[0]['count(*)'] / pagination.get_limit() + 1)

        SuccessReponse.indexSuccess(res, JwtService.generate_jwt("1"), data.data, pagination)
    }


    async create(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }


    async import(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }


    async delete(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }


    async bulk_delete(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }
}