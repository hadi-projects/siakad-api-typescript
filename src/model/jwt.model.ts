
export default class JwtModel{
    private token:string
    private should_refresh:boolean


    public setToken(token:string){
        this.token = token;
    }

    public getToken() {
        return this.token
    }
   
    public setShouldRefresh(should_refresh:boolean){
        this.should_refresh = should_refresh;
    }

    public getShouldRefresh() {
        return this.should_refresh
    }

}