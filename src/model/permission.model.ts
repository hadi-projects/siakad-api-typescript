import Model from "./meta/model";
import d from 'mysql2'
import KeyVal from "./keyval.model";

export default class PermissionsModel extends Model {
    private name: string
    constructor() { super('permissions') }

    public set_name(name: string): PermissionsModel {
        this.name = name
        this.add_values(new KeyVal().setKey('name').setValue(d.escape(name)))
        return this
    }

    public get_name(): string {
        return this.name;
    }
}