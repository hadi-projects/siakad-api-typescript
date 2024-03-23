import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'

export default class UserSeeder {
    static table_name:string = 'users'
    static datetime = moment().format().split("+")[0].replace("T", " ")

    
    
    static async seed(){
        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (
                name, email, password, role_id, status_id, verify_token, created_at, updated_at
            ) VALUES 
            ('root', 'root@mail.com', '$2y$10$FfXv1vi5BYj3WLfAK8KMweNCaXt6A0BBqoPhVRlHsZohPOBzpn8IS', 1, 1, '', 
            '${this.datetime}', '${this.datetime}');
        `)
        .then(()=>console.log(this.table_name + ' table seeding success ✅'))
        .catch((e)=>console.log(this.table_name + ' table seeding failed ❌' + e))
    }
}