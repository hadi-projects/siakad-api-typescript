import Action from "../../enum/action.enum";
import Resource from "../../enum/resources.enum";


export default class AccessModel{
    private api_version:string
    private resource:Resource
    private action:Action


    public getApi_version(): string {
        return this.api_version;
    }

    public setApi_version(api_version: string): AccessModel {
        this.api_version = api_version;
        return this
    }
    
    public getResource(): Resource {
        return this.resource;
    }
    
    public setResource(resource: Resource): AccessModel {
        this.resource = resource;
        return this
    }
    
    public getAction(): Action {
        return this.action;
    }
    
    public setAction(action: Action):AccessModel {
        this.action = action;
        return this
    }


}