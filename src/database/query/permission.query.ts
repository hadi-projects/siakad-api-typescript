import d from 'mysql2'
import PermissionRepositoryModel from '../../model/rolehaspermission.model'

export default class PermissionQuery {
    static index(permissions: PermissionRepositoryModel) {
        return `
        SELECT 
            GROUP_CONCAT(DISTINCT permissions.name) as permissions,
            GROUP_CONCAT(DISTINCT resources.name) as resources,
            GROUP_CONCAT(DISTINCT roles.name) as role
            FROM roles 
        JOIN role_has_permissions 
        	ON role_has_permissions.role_id = roles.id 
        JOIN resources 
        	ON resources.id = role_has_permissions.resource_id 
        JOIN permissions 
        	ON permissions.id  = role_has_permissions.permission_id 
        WHERE roles.id = ${d.escape(permissions.get_role_id())}
            AND resources.id = ${d.escape(permissions.get_resource_id())}
            AND permissions.id = ${d.escape(permissions.get_permission_id())}
        `
        }
}
	