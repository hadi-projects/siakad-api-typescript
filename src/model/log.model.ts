import AccessModel from "./access.model"
import UserModel from "./user.model"

export default class LogModel {
    private ip:string
    private url!:string
    private method!:string
    private endpoint!:string
    private timestamp!:string
    private header!:Object
    private request_body!:string
    private access!:AccessModel
    private user!:UserModel

    public getRequest_body(): string {
        return this.request_body;
    }

    public setRequest_body(request_body: string): void {
        this.request_body = request_body;
    }

    public getAccess(): AccessModel {
        return this.access;
    }

    public setAccess(access: AccessModel): void {
        this.access = access;
    }

    public getUser(): UserModel {
        return this.user;
    }

    public setUser(user: UserModel): void {
        this.user = user;
    }

   
    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }

    public getIp(): string {
        return this.ip;
    }

    public setIp(ip: string): void {
        this.ip = ip;
    }

    public getMethod(): string {
        return this.method;
    }

    public setMethod(method: string): void {
        this.method = method;
    }

    public getEndpoint(): string {
        return this.endpoint;
    }

    public setEndpoint(endpoint: string): void {
        this.endpoint = endpoint;
    }

    public getTimestamp(): string {
        return this.timestamp;
    }

    public setTimestamp(timestamp: string): void {
        this.timestamp = timestamp;
    }

    public getHeader(): Object {
        return this.header;
    }

    public setHeader(header: Object): void {
        this.header = header;
    }
}