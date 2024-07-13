import express from 'express'
// import AccessLogMiddleware from './access_log.middleware'
import PermissionRepository from '../repository/permission.repository'
import PermissionRepositoryModel from '../model/rolehaspermission.model'
import AccessLogMiddleware from './access_log.middleware'


export default class PermissionMiddleware {
    async check(req: express.Request):Promise<boolean> {

        // if /auth, no permission checking
        if (req.url.includes('auth')) {
            return false
        }



        // const user = AccessLogMiddleware.user(req)
       



        // get from redis
        // permissionrepository_model.set_role_id((await user).get_role().get_id())
        // permissionrepository_model.set_resource_id(access.getResource())
        // permissionrepository_model.set_permission_id(access.getAction())

        // const result = await permission_repo.check(permissionrepository_model)

        // return result
        return false
    }
}