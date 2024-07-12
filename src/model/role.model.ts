import moment from "moment"
import RoleTable from "../database/migrations/02.role.migration"
import Model from "./model"
import d from 'mysql2'

export default class RoleModel extends Model{

    constructor() {
        super()
        super.set_table_name(RoleTable.table_name)
        super.set_columns(RoleTable.columns)
    }

    
    private id: string
    private name: string 
    
    v: string[] = []

    public get_id(): string {
        return this.id;
    }

    public set_id(id: string): RoleModel {
        this.id = id;
        return this
    }

    public get_name(): string {
        return this.name; 
    }

    public set_name(name: string):RoleModel {
        this.name = name;
        this.v.push(d.escape(name))
        return this
    }
    
    public static blank_role():RoleModel{
        return new RoleModel()
    }
    
    public static setRoleModel(id:string, name:string):RoleModel{
        const role = new RoleModel()
        role.set_id(id)
        role.set_name(name)
        return role
    }
    
    public set_created_at(): RoleModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push(d.escape((date)))
        return this
    }
    public set_updated_at(): RoleModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push((d.escape(date)))
        return this
    }

}