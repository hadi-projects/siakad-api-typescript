import moment from "moment"
import AccessModel from "./meta/access.model"
import Model from "./meta/model"
import UserModel from "./user.model"
import d from 'mysql2'
import KeyVal from "./keyval.model"

export default class AccessLogModel extends Model {

    private id: string
    private ip: string
    private url!: string
    private method!: string
    private endpoint!: string
    private header!: Object
    private request_body!: string
    private access!: AccessModel
    private user!: UserModel

    constructor() { super('access_logs') }

    public get_properties(): Array<string> {
        return ['id', 'ip', 'url', 'method', 'endpoint', 'header', 'request_body', 'access', 'user', 'created_at']
    }

    
    public set_id(id: string): AccessLogModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }
    public get_id(): string {
        return this.id;
    }
    
    
    public set_ip(ip: string): AccessLogModel {
        this.ip = ip
        this.add_values(new KeyVal().setKey('ip').setValue(d.escape(ip)))
        return this
    }
    public get_ip(): string {
        return this.ip;
    }
    
    
    public set_url(url: string): AccessLogModel {
        this.url = url
        this.add_values(new KeyVal().setKey('url').setValue(d.escape(url)))
        return this
    }
    public get_url(): string {
        return this.url;
    }
    
    
    public set_method(method: string): AccessLogModel {
        this.method = method
        this.add_values(new KeyVal().setKey('method').setValue(d.escape(method)))
        return this
    }
    public get_method(): string {
        return this.method;
    }
    
    
    public set_endpoint(endpoint: string): AccessLogModel {
        this.endpoint = endpoint
        this.add_values(new KeyVal().setKey('endpoint').setValue(d.escape(endpoint)))
        return this
    }
    public get_endpoint(): string {
        return this.endpoint;
    }
    
    
    public set_header(header: string): AccessLogModel {
        this.header = header
        this.add_values(new KeyVal().setKey('header').setValue(d.escape(header)))
        return this
    }
    public get_header(): Object {
        return this.header;
    }
    
    
    public set_request_body(request_body: string): AccessLogModel {
        this.request_body = request_body
        this.add_values(new KeyVal().setKey('request_body').setValue(d.escape(request_body)))
        return this
    }
    public get_request_body(): Object {
        return this.request_body;
    }
    
    
    public set_access(access: AccessModel): AccessLogModel {
        this.access = access
        this.add_values(new KeyVal().setKey('access').setValue(d.escape('{}')))
        return this
    }
    public get_access(): Object {
        return this.access;
    }
    
    
    public set_user(user: UserModel): AccessLogModel {
        this.user = user
        this.add_values(new KeyVal().setKey('user').setValue(d.escape('{}')))
        return this
    }
    public get_user(): Object {
        return this.user;
    }

}