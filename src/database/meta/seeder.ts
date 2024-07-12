import Model from "../../model/model";
import db from '../database'

export default class Seeder {
    columns: Array<Model> = []
    table_name: string = ''

    constructor(table_name:string, columns: Array<Model>) {
        this.columns = columns
        this.table_name = table_name
    }

   async seed(){
    await (await db).query(`DELETE FROM ${this.table_name}`)
        await (await db).query(`ALTER TABLE ${this.table_name} AUTO_INCREMENT = 1`)
        for(var i=0;i<this.columns.length;i++){
            await this.columns[i].create()
        }
   }
}