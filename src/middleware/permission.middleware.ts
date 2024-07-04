import express from 'express'
import AccessLogMiddleware from './access_log.middleware'
import PermissionRepository from '../repository/permission.repository'
import PermissionRepositoryModel from '../model/permissionrepository.model'


export default class PermissionMiddleware {
    async check(req: express.Request) {
        const user = AccessLogMiddleware.user(req)
        const access = AccessLogMiddleware.access(req)
        const permission_repo = new PermissionRepository()
        const permissionrepository_model = new PermissionRepositoryModel()


        permissionrepository_model.setRole_name((await user).getRole().getName())
        permissionrepository_model.setResource_name(access.getResource())
        permissionrepository_model.setPermission_name(access.getAction())

        const result = await permission_repo.check(permissionrepository_model)

        return result
    }
}