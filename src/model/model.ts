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
        console.log('2. create');
        this.columns.shift()
        console.log(this.values);
        console.log(this.columns);
        await (await db).query<RowDataPacket[]>(`

            INSERT INTO ${this.table_name} (${[this.columns]}) VALUES (${[this.values]});
        `)
        
    }


}