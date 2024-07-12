import moment from "moment"
import StatusTable from "../database/migrations/03.status.migration"
import Model from "./model"
import d from 'mysql2'

export default class StatusModel extends Model {

    constructor() {
        super()
        super.set_table_name(StatusTable.table_name)
        super.set_columns(StatusTable.columns)
    }

    private id: string
    private name: string 
    private status_key: string 
    private status_id: string 

    v: string[] = []

    public get_id(): string {
        return this.id;
    }

    public set_id(id: string): StatusModel {
        this.id = id;
        return this
    }

    public get_name(): string {
        return this.name;
    }

    public set_name(name: string): StatusModel {
        this.name = name;
        this.v.push(d.escape(name))
        return this
    }

    public get_status_key(): string {
        return this.status_key;
    }

    public set_status_key(status_key: string): StatusModel {
        this.status_key = status_key;
        this.v.push(d.escape(status_key))
        return this
    }

    public get_status_id(): string {
        return this.status_id;
    }

    public set_status_id(status_id: string): StatusModel {
        this.status_id = status_id;
        this.v.push(d.escape(status_id))
        return this
    }

    public set_created_at(): StatusModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push(d.escape((date)))
        return this
    }
    public set_updated_at(): StatusModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.v.push((d.escape(date)))
        return this
    }

    public static blankStatus():StatusModel{
        return new StatusModel()
    }
}