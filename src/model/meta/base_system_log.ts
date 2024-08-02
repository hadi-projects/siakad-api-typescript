import Model from "./model"
import d, { RowDataPacket } from 'mysql2'
import KeyVal from "../keyval.model"
import moment from "moment"
import db from '../../database/database'


export default class BaseSystemLog{
    private id: string
    private level: string
    private message: string
    private system: string
    private services: string
    private created_at: string

    public values: Array<KeyVal> | any = []

    add_values(keyval: KeyVal):BaseSystemLog{
        if (keyval.getValue() !== null) {
            this.values.push(keyval)
        }
        return this
    }

    public set_id(id: string): BaseSystemLog {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }
    public get_id(): string {
        return this.id;
    }


    public set_level(level: string): BaseSystemLog {
        this.level = level
        this.add_values(new KeyVal().setKey('level').setValue(d.escape(level)))
        return this
    }
    public get_level(): string {
        return this.level;
    }


    public set_message(message: string): BaseSystemLog {
        this.message = message
        this.add_values(new KeyVal().setKey('message').setValue(d.escape(message)))
        return this
    }
    public get_message(): string {
        return this.message;
    }
    

    public set_system(system: string): BaseSystemLog {
        this.system = system
        this.add_values(new KeyVal().setKey('system').setValue(d.escape(system)))
        return this
    }
    public get_system(): string {
        return this.system;
    }

    public set_services(services: string): BaseSystemLog {
        this.services = services
        this.add_values(new KeyVal().setKey('services').setValue(d.escape(services)))
        return this
    }
    public get_services(): string {
        return this.services;
    }

    public set_created_at(dt: string = ""): BaseSystemLog {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.created_at = dt == "" ? date : dt
        this.add_values(new KeyVal().setKey('created_at').setValue(d.escape(this.created_at)))
        return this
    }

    public get_created_at(): string {
        return this.created_at
    }

    /////

    async create(){
        const data = this.format_insert(this.values)
        var result = {}

        await (await db).query<RowDataPacket[]>(`
            INSERT INTO system_logs (${[data[0]]}) VALUES (${[data[1]]});
        `)

    }


    // ===== util =====

    format_insert(values: KeyVal[]): Array<Array<String>> {
        const temp_column = []
        const temp_value = []
        for (var i = 0; i < values.length; i++) {
            if(this.values[i].getValue().includes('values')) {
                continue
            }else {
                temp_column.push(this.values[i].getKey())
                temp_value.push(this.values[i].getValue())
            }
        }
        return [temp_column, temp_value]

    }

    format_update(values: KeyVal[]): string {
        var temp = ""
        for (var i = 0; i < values.length; i++) {
            var a = `${values[i].getKey()} = ${values[i].getValue()}, `
            if (i == values.length - 1) a = a.replace(",", "")
            temp += a
        }
        return temp

    }


}