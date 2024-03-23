import express from 'express'
import AccessLogMiddleware from './access_log.middleware'
import PermissionRepository from '../repository/permission.repository'
import PermissionRepositoryModel from '../model/permissionrepository.model'
import FailedResponse from '../util/response/failed_response'


export default class PermissionMiddleware {
    async check(req:express.Request, res:express.Response, next:express.NextFunction){
        const user = AccessLogMiddleware.user(req)
        const access = AccessLogMiddleware.access(req)
        const permission_repo = new PermissionRepository()
        const permissionrepository_model = new PermissionRepositoryModel()
        
        
        permissionrepository_model.setRole_name(user.getRole().getName())
        permissionrepository_model.setResource_name(access.getResource())
        permissionrepository_model.setPermission_name(access.getAction())
        
        const result = await permission_repo.check(permissionrepository_model)
        if(result===false)FailedResponse.failedPermission(res, '')
        else next()
    }
}