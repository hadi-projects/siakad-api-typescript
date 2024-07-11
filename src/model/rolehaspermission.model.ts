import moment from "moment"
import RoleHasPermissionTable from "../database/migrations/04.rolehaspermission.migration"
import Model from "./model"
import d from 'mysql2'

export default class RoleHasPermissionModel extends Model {
    private role_id:string 
    private resource_id:string 
    private permission_id:string 

    constructor() {
        super()
        super.set_table_name(RoleHasPermissionTable.table_name)
        super.set_columns(RoleHasPermissionTable.columns)
    }

    // values
    v: string[] = []

    
    public get_role_id(): string {
        return this.role_id;
    }

    public set_role_id(role_id: string): RoleHasPermissionModel {
        this.role_id = role_id;
        this.v.push(d.escape(role_id))
        this.values = this.v
        return this
    }

    public get_resource_id(): string {
        return this.resource_id;
    }

    public set_resource_id(resource_id: string): RoleHasPermissionModel {
        this.resource_id = resource_id;
        this.v.push(d.escape(resource_id))
        this.values = this.v
        return this
    }

    public get_permission_id(): string {
        return this.permission_id;
    }

    public set_permission_id(permission_id: string): RoleHasPermissionModel {
        this.permission_id = permission_id;
        this.v.push(d.escape(permission_id))
        this.values = this.v
        return this
    }
    public set_created_at(): RoleHasPermissionModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push(d.escape((date)))
        this.values = this.v
        return this
    }
    public set_updated_at(): RoleHasPermissionModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push((d.escape(date)))
        this.values = this.v
        return this
    }
}