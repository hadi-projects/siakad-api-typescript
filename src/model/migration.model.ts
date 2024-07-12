import Model from "./meta/model";
import moment from "moment";
import d from 'mysql2'
import KeyVal from "./keyval.model";

export default class MigrationsModel extends Model {
    constructor() {
        super('migrations')
    }

    private name:string;
   
    public set_name(name: string|any): MigrationsModel {
        this.name = name
        this.add_values(new KeyVal().setKey('table_name').setValue(d.escape(name)))
        return this
    }
    public get_name():string{
        return this.name
    }
}