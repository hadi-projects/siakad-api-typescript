import Model from "./meta/model"
import d from 'mysql2'
import KeyVal from "./keyval.model"

export default class RoleHasPermissionModel extends Model {

    private role_id:string 
    private resource_id:string 
    private permission_id:string 
    constructor() { super('role_has_permissions') }
    
    public set_role_id(role_id: string): RoleHasPermissionModel {
        this.role_id = role_id
        this.add_values(new KeyVal().setKey('role_id').setValue(d.escape(role_id)))
        return this
    }
    public get_role_id(): string {
        return this.role_id;
    }
    
    
    public set_resource_id(resource_id: string): RoleHasPermissionModel {
        this.resource_id = resource_id
        this.add_values(new KeyVal().setKey('resource_id').setValue(d.escape(resource_id)))
        return this
    }
    public get_resource_id(): string {
        return this.resource_id;
    }
    
    
    public set_permission_id(permission_id: string): RoleHasPermissionModel {
        this.permission_id = permission_id
        this.add_values(new KeyVal().setKey('permission_id').setValue(d.escape(permission_id)))
        return this
    }
    public get_permission_id(): string {
        return this.permission_id;
    }
}