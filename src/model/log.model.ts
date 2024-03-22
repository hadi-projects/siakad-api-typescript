export default class LogModel {
    private ip!:string
    private url!:string
    private method!:string
    private endpoint!:string
    private timestamp!:string
    private header!:string
    private body!:string
   
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

    public getHeader(): string {
        return this.header;
    }

    public setHeader(header: string): void {
        this.header = header;
    }

    public getBody(): string {
        return this.body;
    }

    public setBody(body: string): void {
        this.body = body;
    }

}