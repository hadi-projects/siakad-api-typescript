export default class RoleModel {
    private id: string
    private name: string 

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name; 
    }

    public setName(name: string): void {
        this.name = name;
    }

    public static blankRole():RoleModel{
        return new RoleModel()
    }

    public static setRoleModel(id:string, name:string):RoleModel{
        const role = new RoleModel()
        role.setId(id)
        role.setName(name)
        return role
    }

}