import moment from "moment"
import Model from "./model"
import d from 'mysql2'
import ResourceTable from "../database/migrations/05.resources.migration"

export default class ResourceModel extends Model{

    constructor() {
        super()
        super.set_table_name(ResourceTable.table_name)
        super.set_columns(ResourceTable.columns)
    }

    
    private id: string
    private name: string 
    
    v: string[] = []

    public get_id(): string {
        return this.id;
    }

    public set_id(id: string): ResourceModel {
        this.id = id;
        return this
    }

    public get_name(): string {
        return this.name; 
    }

    public set_name(name: string):ResourceModel {
        this.name = name;
        this.v.push(d.escape(name))
        return this
    }
    
    public static setRoleModel(id:string, name:string):ResourceModel{
        const role = new ResourceModel()
        role.set_id(id)
        role.set_name(name)
        return role
    }
    
    public set_created_at(): ResourceModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push(d.escape((date)))
        return this
    }
    public set_updated_at(): ResourceModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push((d.escape(date)))
        return this
    }

}