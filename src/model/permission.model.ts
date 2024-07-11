import Model from "./model";
import moment from "moment";
import d from 'mysql2'
import PermissionTable from "../database/migrations/06.permission.migration";

export default class PermissionsModel extends Model {
    constructor() {
        super()
        super.set_table_name(PermissionTable.table_name)
        super.set_columns(PermissionTable.columns)
    }

    // values
    v: string[] = []

    public set_name(name: string): PermissionsModel {
        this.v.push(d.escape(name))
        this.values = this.v
        return this
    }
    public set_created_at(): PermissionsModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.values.push(d.escape(date))
        return this
    }
    public set_updated_at(): PermissionsModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.values.push(d.escape(date))
        return this
    }
}