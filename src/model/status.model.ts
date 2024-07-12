import moment from "moment"
import Model from "./meta/model"
import d from 'mysql2'
import KeyVal from "./keyval.model"

export default class StatusModel extends Model {
    private id: string
    private name: string
    private status_key: string
    private status_id: string
    constructor() { super('statuses') }

    public set_id(id: string): StatusModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }

    public get_id(): string {
        return this.id;
    }

    public set_name(name: string): StatusModel {
        this.name = name
        this.add_values(new KeyVal().setKey('name').setValue(d.escape(name)))
        return this
    }
    public get_name(): string {
        return this.name;
    }


    public set_status_key(status_key: string): StatusModel {
        this.status_key = status_key
        this.add_values(new KeyVal().setKey('status_key').setValue(d.escape(status_key)))
        return this
    }
    public get_status_key(): string {
        return this.status_key;
    }


    public set_status_id(status_id: string): StatusModel {
        this.status_id = status_id
        this.add_values(new KeyVal().setKey('status_id').setValue(d.escape(status_id)))
        return this
    }
    public get_status_id(): string {
        return this.status_id;
    }

}