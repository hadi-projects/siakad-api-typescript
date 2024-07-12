import moment from "moment"
import AccessLogTable from "../database/migrations/07.access_log.migration"
import AccessModel from "./access.model"
import Model from "./model"
import UserModel from "./user.model"
import d from 'mysql2'

export default class AccessLogModel extends Model {

    constructor() {
        super()
        super.set_table_name(AccessLogTable.table_name)
        super.set_columns(AccessLogTable.columns)
    }

    private ip:string
    private url!:string
    private method!:string
    private endpoint!:string
    private timestamp!:string
    private header!:Object
    private request_body!:string
    private access!:AccessModel
    private user!:UserModel

    v: string[] = []

    public get_request_body(): string {
        return this.request_body;
    }

    public set_request_body(request_body: string): AccessLogModel {
        this.request_body = request_body;
        return this
    }

    public get_access(): AccessModel {
        return this.access;
    }

    public set_access(access: AccessModel): AccessLogModel {
        this.access = access;
        this.v.push(d.escape(access.getResource()))
        return this
    }

    public get_user(): UserModel {
        return this.user;
    }

    public set_user(user: UserModel): AccessLogModel {
        this.user = user;
        this.v.push(d.escape(user.get_name()))
        return this
    }

   
    public get_url(): string {
        return this.url;
    }

    public set_url(url: string): AccessLogModel {
        this.url = url;
        this.v.push(d.escape(url))
        return this
    }

    public get_ip(): string {
        return this.ip;
    }

    public set_ip(ip: string): AccessLogModel {
        this.ip = ip;
        this.v.push(d.escape(ip))
        return this
    }

    public get_method(): string {
        return this.method;
    }

    public set_method(method: string): AccessLogModel {
        this.endpoint = method;
        this.v.push(d.escape(method))
        return this
    }

    public get_endpoint(): string {
        return this.endpoint;
    }

    public set_endpoint(endpoint: string): AccessLogModel {
        this.endpoint = endpoint;
        this.v.push(d.escape(endpoint))
        return this
    }

    public get_timestamp(): string {
        return this.timestamp;
    }

    public set_timestamp(): AccessLogModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        return this
    }

    public get_header(): Object {
        return this.header;
    }

    public set_header(header: Object): AccessLogModel {
        this.header = header;
        this.v.push(d.escape(header))
        return this
    }
}