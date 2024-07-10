export default class StatusModel {
    private id: string
    private name: string 
    private status_key: string 
    private status_id: string 

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

    public getStatus_key(): string {
        return this.status_key;
    }

    public setStatus_key(status_key: string): void {
        this.status_key = status_key;
    }

    public getStatus_id(): string {
        return this.status_id;
    }

    public setStatus_id(status_id: string): void {
        this.status_id = status_id;
    }


    public static blankStatus():StatusModel{
        return new StatusModel()
    }
    public static setStatusModel (id:string, name:string):StatusModel{
        const status = new StatusModel()
        status.setId(id)
        status.setName(name)
        return status
    }
}