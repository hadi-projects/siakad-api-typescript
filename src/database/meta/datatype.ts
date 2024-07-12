export default class Type {
    static varchar(len:number=255):string {
        return `VARCHAR(${len})`;
    } 
    
    static not_null:string = `NOT NULL`;
    static datetime:string = `DATETIME`;
    static int:string = `INT`;
    static unique:string = `UNIQUE`;
    static primary_key:string = `PRIMARY KEY`;
    static auto_increment:string = `AUTO_INCREMENT`;
    static json:string = `JSON`;

}