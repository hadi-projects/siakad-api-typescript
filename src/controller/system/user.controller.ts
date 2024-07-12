import { Request, Response } from 'express'
import InfoResponse from '../../util/response/info_response'
import UserModel from '../../model/user.model'
import RoleModel from '../../model/role.model'
import FailedResponse from '../../util/response/failed_response'
import SuccessReponse from '../../util/response/success_response'
import JwtService from '../../service/jwt.service'
import KeyVal from '../../model/keyval.model'
// import UserRepository from '../../repository/user.repository'
import StatusModel from '../../model/status.model'


export default class UserController {

    async index(req: Request, res: Response): Promise<any> {
        // const user_repo =  new UserRepository()
        
        // const users = await new UserModel().index()    
        // return SuccessReponse.getDataSuccess(res, users, JwtService.generate_jwt("1", req.headers.authorization?.split(" ")[1]))
    }


    async create(req: Request, res: Response): Promise<any> {
        const request = new UserModel()
        // const user_repo =  new UserRepository()

        request.set_name(req.body['name'])
        request.set_email(req.body['email'])
        request.set_password(req.body['password'])
        // request.set_role(RoleModel.setRoleModel(req.body['role_id'], ''))

        // if(request.validateCreate(request)==false) return FailedResponse.validationFailed(res)

        // const result = await user_repo.create(request)
        // if (result != true) return FailedResponse.queryFailed(res, '', result.message)

        return SuccessReponse.createDataSuccess(res, JwtService.generate_jwt(''))
    }

    async show(req: Request, res: Response): Promise<any> {
        const request = new UserModel()
        // const user_repo =  new UserRepository()

        request.set_id(req.body['id'])
        // if(request.validateId(request)==false) return FailedResponse.validationFailed(res)

        // const user = await user_repo.show(new KeyVal().setKey('id').setValue(request.get_id()))
        // if (user.get_name() == null) return FailedResponse.queryFailed(res, '', 'result.message')

        // return SuccessReponse.getDataSuccess(res, user,  JwtService.generate_jwt(''))
    }

    
    async edit(req: Request, res: Response): Promise<any> {
        const request = new UserModel()
        // const user_repo =  new UserRepository()
        
        // request.set_id(req.body['id'])
        //     .set_name(req.body['name'])
        //     .set_email(req.body['email'])
        //     .set_password(req.body['password'])
        //     .set_status(new StatusModel().set_id(req.body['status_id']))
        //     .set_role(RoleModel.setRoleModel(req.body['role_id'], ''))

        // if(request.validateEdit(request)==false) return FailedResponse.validationFailed(res)

        // const result = await user_repo.edit(request)
        // if (result != true) return FailedResponse.queryFailed(res, '', result.message)

        return SuccessReponse.editDataSuccess(res, JwtService.generate_jwt(''))
    }
    

    async delete(req: Request, res: Response): Promise<any> {
        const request = new UserModel()
        // const user_repo =  new UserRepository()

        request.set_id(req.body['id'])

        // if(request.validateId(request)==false) return FailedResponse.validationFailed(res)

        // const result = await user_repo.delete(new KeyVal().setKey('id').setValue(request.get_id()))
        // if (result != true) return FailedResponse.queryFailed(res, '', 'result.message')

        return SuccessReponse.deleteDataSuccess(res, JwtService.generate_jwt(''))
    }
}