import Model from "./model";
import Migrations from '../database/migrations/migrations'
import moment from "moment";
import d from 'mysql2'
import KeyVal from "./keyval.model";

export default class MigrationsModel extends Model {
    constructor() {
        super()
        super.set_table_name(new Migrations().get_table_name())
        // super.set_columns(Migrations.columns)
    }

    private id:string;
    private name:string;
    private created_at:string;


    public set_id(id: string): MigrationsModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }
    public get_id():string{
        return this.id
    }
   
    public set_name(name: string|any): MigrationsModel {
        this.name = name
        this.add_values(new KeyVal().setKey('table_name').setValue(d.escape(name)))
        return this
    }
    public get_name():string{
        return this.name
    }
    
    public set_created_at(dt:string=""): MigrationsModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.created_at = dt == "" ? date : dt
        this.add_values(new KeyVal().setKey('created_at').setValue(d.escape(this.created_at)))
        return this
    }
    public get_created_at():string{
        return this.created_at
    }
}