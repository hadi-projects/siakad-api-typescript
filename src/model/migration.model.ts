import Model from "./model";
import Migrations from '../database/migrations/migrations'
import moment from "moment";
import d from 'mysql2'

export default class MigrationsModel extends Model {
    constructor() {
        super()
        super.set_table_name(Migrations.table_name)
        super.set_columns(Migrations.columns)
    }

    // values
    v: string[] = []

    public set_name(name: string): MigrationsModel {
        this.v.push(d.escape(name))
        this.values = this.v
        return this
    }

    public set_created_at(): MigrationsModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.values.push(d.escape(date))
        return this
    }
}