
export default class JwtModel{
    private token:string
    private should_refresh:boolean


    public setToken(token:string):JwtModel{
        this.token = token;
        return this
    }
    
    public getToken() {
        return this.token
    }
    
    public setShouldRefresh(should_refresh:boolean):JwtModel{
        this.should_refresh = should_refresh;
        return this
    }

    public getShouldRefresh() {
        return this.should_refresh
    }

}