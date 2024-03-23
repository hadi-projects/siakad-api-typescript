import Action from "../enum/action.enum";
import Resource from "../enum/resources.enum";


export default class AccessModel{
    private api_version:string
    private resource:Resource
    private action:Action


    public getApi_version(): string {
        return this.api_version;
    }

    public setApi_version(api_version: string): void {
        this.api_version = api_version;
    }

    public getResource(): Resource {
        return this.resource;
    }

    public setResource(resource: Resource): void {
        this.resource = resource;
    }

    public getAction(): Action {
        return this.action;
    }

    public setAction(action: Action) {
        this.action = action;
    }

}