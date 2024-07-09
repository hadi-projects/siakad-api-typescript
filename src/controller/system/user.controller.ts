import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import UserRepository from '../../repository/user.repository'
import RoleModel from '../../model/role.model'
import FailedResponse from '../../util/response/failed_response'
import SuccessReponse from '../../util/response/success_response'
import JwtService from '../../service/jwt.service'
import JwtModel from '../../model/jwt.model'
import { createClient } from 'redis'


export default class UserController {
    async index(req: Request, res: Response): Promise<any> {
        res.send(1234)
        const j = new JwtModel()
        const user_repo = new UserRepository()

        const client = await createClient()
            .on('error', err => console.log('Redis Client Error', err))
            .connect();

        var ss = await user_repo.index()
            

        return SuccessReponse.getDataSuccess(res, ss, j)
    }
    async create(req: Request, res: Response): Promise<any> {
        const request = new UserModel()
        const user_repo = new UserRepository()
        const role = new RoleModel()

        role.setId(req.body['role_id'])
        request.setName(req.body['name'])
        request.setEmail(req.body['email'])
        request.setPassword(req.body['password'])
        request.setRole(role)

        const result = await user_repo.create(request)
        if (result == false) return FailedResponse.queryFailed(res, '')

        return SuccessReponse.createDataSuccess(res, JwtService.generate_jwt(''))
    }
    async show(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async edit(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }
    async delete(req: Request, res: Response): Promise<any> {
        InfoResponse.progress(res)
    }
}