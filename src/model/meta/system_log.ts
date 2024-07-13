import Model from "./model"
import d from 'mysql2'
import KeyVal from "../keyval.model"

export default class SystemLog extends Model {
    private id: string
    private level: string
    private message: string
    private system: string
    private services: string
    constructor() { super('system_logs') }

    public set_id(id: string): SystemLog {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }
    public get_id(): string {
        return this.id;
    }


    public set_level(level: string): SystemLog {
        this.level = level
        this.add_values(new KeyVal().setKey('level').setValue(d.escape(level)))
        return this
    }
    public get_level(): string {
        return this.level;
    }


    public set_message(message: string): SystemLog {
        this.message = message
        this.add_values(new KeyVal().setKey('message').setValue(d.escape(message)))
        return this
    }
    public get_message(): string {
        return this.message;
    }
    

    public set_system(system: string): SystemLog {
        this.system = system
        this.add_values(new KeyVal().setKey('system').setValue(d.escape(system)))
        return this
    }
    public get_system(): string {
        return this.system;
    }

    public set_services(services: string): SystemLog {
        this.services = services
        this.add_values(new KeyVal().setKey('services').setValue(d.escape(services)))
        return this
    }
    public get_services(): string {
        return this.services;
    }

}