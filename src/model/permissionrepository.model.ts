export default class PermissionRepositoryModel {
    private role_name:string 
    private resource_name:string 
    private permission_name:string 
    
    public getRole_name(): string {
        return this.role_name;
    }

    public setRole_name(role_name: string): void {
        this.role_name = role_name;
    }

    public getResource_name(): string {
        return this.resource_name;
    }

    public setResource_name(resource_name: string): void {
        this.resource_name = resource_name;
    }

    public getPermission_name(): string {
        return this.permission_name;
    }

    public setPermission_name(permission_name: string): void {
        this.permission_name = permission_name;
    }
}