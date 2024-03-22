import axios from 'axios'

export class AuthService{
    async oauth2(parameter: ApiKeyModel):Promise<string>{
        
        console.log(parameter.getBody())
        console.log(parameter.getHeader())

        try{
            const result = await axios.post(`https://wallet-admin.depository.id/auth/oauth/token`,
            parameter.getBody(), {headers:parameter.getHeader()},
            )
            console.log(result)
        }catch(e){
            return 'gagal'
        }


        // console.log(result)

        return '1234567890'
    }

    
}

export class ApiKeyModel {
    private username!:string
    private api_key!:string
    private signature!:string
    private timestamp!:string
    private grant_type!:string
    private authorization!:string

    public getAuthorization(): string {
        return this.authorization;
    }

    public setAuthorization(authorization: string): void {
        this.authorization = authorization;
    }


    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getApi_key(): string {
        return this.api_key;
    }

    public setApi_key(api_key: string): void {
        this.api_key = api_key;
    }

    public getSignature(): string {
        return this.signature;
    }

    public setSignature(signature: string): void {
        this.signature = signature;
    }

    public getTimestamp(): string {
        return this.timestamp;
    }

    public setTimestamp(timestamp: string): void {
        this.timestamp = timestamp;
    }

    public getGrant_type(): string {
        return this.grant_type;
    }

    public setGrant_type(grant_type: string): void {
        this.grant_type = grant_type;
    }

    public getBody(){
        var form_data = new FormData();

        form_data.append('username', this.username);
        form_data.append('grant_type', this.grant_type);
        form_data.append('timestamp', this.timestamp);
        form_data.append('signature', this.signature);

        return form_data
    }
    
    public getHeader(){
        return {
            Authorization: this.authorization
        }
    }

}