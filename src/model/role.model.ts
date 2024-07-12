import Model from "./meta/model"
import d from 'mysql2'
import KeyVal from "./keyval.model"

export default class RoleModel extends Model {
    private id: string
    private name: string
    constructor() { super('roles') }

    public set_id(id: string): RoleModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }

    public get_id(): string {
        return this.id;
    }

    public set_name(name: string): RoleModel {
        this.name = name
        this.add_values(new KeyVal().setKey('name').setValue(d.escape(name)))
        return this
    }

    public get_name(): string {
        return this.name;
    }

}