import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'

export default class PermissionSeeder {
    static table_name:string = 'permissions'
    static datetime = moment().format().split("+")[0].replace("T", " ")
    
    static async seed(){
        await (await db).query<RowDataPacket[]>(`
        INSERT INTO ${this.table_name} (
            name, created_at, updated_at
            ) VALUES 
            ('index', '${this.datetime}', '${this.datetime}'),
            ('create', '${this.datetime}', '${this.datetime}'),
            ('show', '${this.datetime}', '${this.datetime}'),
            ('edit', '${this.datetime}', '${this.datetime}'),
            ('delete', '${this.datetime}', '${this.datetime}'),
            ('reset', '${this.datetime}', '${this.datetime}'),
            ('freeze', '${this.datetime}', '${this.datetime}'),
            ('generate', '${this.datetime}', '${this.datetime}'),
            ('verify', '${this.datetime}', '${this.datetime}'),
            ('login', '${this.datetime}', '${this.datetime}'),
            ('logout', '${this.datetime}', '${this.datetime}'),
            ('ping', '${this.datetime}', '${this.datetime}'),
            ('none', '${this.datetime}', '${this.datetime}');
            `)
            .then(()=>console.log(this.table_name + ' table seeding success ✅'))
            .catch(()=>console.log(this.table_name + ' table seeding failed ❌'))
}
}