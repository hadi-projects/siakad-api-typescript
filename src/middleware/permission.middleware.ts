import express from 'express'
import AccessLogMiddleware from './access_log.middleware'
import PermissionRepository from '../repository/permission.repository'
import PermissionRepositoryModel from '../model/rolehaspermission.model'


export default class PermissionMiddleware {
    static async  check(req: express.Request) {
        const user = AccessLogMiddleware.user(req)
        const access = AccessLogMiddleware.access(req)
        const permission_repo = new PermissionRepository()
        const permissionrepository_model = new PermissionRepositoryModel()


        permissionrepository_model.set_role_id((await user).get_role().get_id())
        permissionrepository_model.set_resource_id(access.getResource())
        permissionrepository_model.set_permission_id(access.getAction())

        const result = await permission_repo.check(permissionrepository_model)

        return result
    }
}