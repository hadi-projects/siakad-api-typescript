import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'

export default class RoleSeeder {
    static table_name:string = 'roles'
    static datetime = moment().format().split("+")[0].replace("T", " ")

    
    static async seed(){
        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (
                name, created_at, updated_at
            ) VALUES 
            ('root', '${this.datetime}', '${this.datetime}'),
            ('admin', '${this.datetime}', '${this.datetime}'),
            ('member', '${this.datetime}', '${this.datetime}'),
            ('mahasiswa', '${this.datetime}', '${this.datetime}'),
            ('auth', '${this.datetime}', '${this.datetime}');
        `)
        .then(()=>console.log(this.table_name + ' table seeding success ✅'))
        .catch((e)=>console.log(this.table_name + ' table seeding failed ❌'+e))
    }
}