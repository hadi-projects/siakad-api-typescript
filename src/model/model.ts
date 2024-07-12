import { RowDataPacket } from 'mysql2';
import db from '../database/database'
import KeyVal from './keyval.model';

export default class Model {
    protected table_name: string;
    protected columns: string[]
    // raw key values
    public values: Array<KeyVal> = []
    // // key values tobe inserted to db
    // // key is column name
    // // val is value of column to be inserted
    // public data:KeyVal = new KeyVal()

    constructor() { }

    set_table_name(table_name: string) {
        this.table_name = table_name
    }

    set_columns(columns: string[]) {
        this.columns = columns
    }

    public add_values(keyval: KeyVal) {
        if (keyval.getValue() === null) return
        else this.values.push(keyval)
    }

    async create() {
        const column = []
        const value = []

        for(var i=0;i<this.values.length;i++){
            column.push(this.values[i].getKey())
            value.push(this.values[i].getValue())
        }
        console.log([
            column, value
        ]);

        console.log('start inserting..');
        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (${[column]}) VALUES (${[value]});
        `).then((e) => console.log('done: ' +  e)).catch((e) => console.log('error: ' + e))
        console.log('done inserting..');
        
    }
    async show(): Promise<Model> {
        this.columns = this.columns.filter((d) => d != "id")
        return this
    }
    async update(): Promise<Model> {
        this.columns = this.columns.filter((d) => d != "id")
        return this
    }
}