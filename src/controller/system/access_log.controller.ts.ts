import { Request, Response } from 'express'
import SuccessReponse from '../../util/response/success_response'
import JwtService from '../../service/jwt.service'
import AccessLogModel from '../../model/access_log.model'
import PaginationModel from '../../model/pagination.model'


export default class AccessLogController {
    async index(req: Request, res: Response) {

        const pagination = new PaginationModel()
        .set_search(req.body['search'])
        .set_page(req.body['page'])
        .set_limit(req.body['limit'])
        .set_offset(req.body['offset'])
        .set_count(req.body['count'])


        const data = await new AccessLogModel()
        .set_pagination(pagination)
        .set_properties(new AccessLogModel().get_properties())
        .index()

        console.log("===data====")
        console.log(data)
        console.log("===data====")

        return SuccessReponse.getDataSuccess(res, data, JwtService.generate_jwt("1", req.headers.authorization?.split(" ")[1]))
    }
}