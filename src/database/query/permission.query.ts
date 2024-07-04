import d from 'mysql2'
import PermissionRepositoryModel from '../../model/permissionrepository.model'

export default class PermissionQuery {
    static index(permissions: PermissionRepositoryModel) {
        // console.log(permissions);
        
        
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
        WHERE roles.name = ${d.escape(permissions.getRole_name())}
            AND resources.name = ${d.escape(permissions.getResource_name())}
            AND permissions.name = ${d.escape(permissions.getPermission_name())}
        `
        }
}
	