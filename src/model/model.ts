import { RowDataPacket } from 'mysql2';
import db from '../database/database'

export default class Model {
    protected table_name:string;
    protected columns:string[]
    public values:string[]

    constructor(){}

    set_table_name(table_name:string){
        this.table_name = table_name
    }
    
    set_columns(columns:string[]){
        this.columns = columns
    }
    set_values(values:string[]){
        this.values = values
    }
    
    async create(){
        this.columns = this.columns.filter((d)=>d!="id")
        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (${[this.columns]}) VALUES (${[this.values]});
        `).then(()=>console.log('done: '+this.values)).catch((e)=>console.log('error: '+e))
    }
}