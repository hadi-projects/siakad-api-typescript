import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'

export default class StatusSeeder {
    static table_name:string = 'statuses'
    static datetime = moment().format().split("+")[0].replace("T", " ")
    
    
    static async seed(){
        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (
                status_key, status_id, name, created_at, updated_at
            ) VALUES 
            ('user' , 1, 'GENERATE OTP', '${this.datetime}', '${this.datetime}'),
            ('user' , 2, 'VERIFY OTP', '${this.datetime}', '${this.datetime}'),
            ('user' , 3, 'ACTIVE', '${this.datetime}', '${this.datetime}'),
            ('user' , 4, 'FREEZED', '${this.datetime}', '${this.datetime}');
        `)
        .then(()=>console.log(this.table_name + ' table seeding success ✅'))
        .catch((e)=>console.log(this.table_name + ' table seeding failed ❌'+e))
    }
}