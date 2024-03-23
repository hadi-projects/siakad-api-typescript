import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export class ForeignTable {
    
    static async migrate() {


        let table_name = 'users'
        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${table_name} 
        ADD FOREIGN KEY (role_id) REFERENCES roles(id);
        `)
        .then(()=>console.log(table_name + ' table foreign key success ✅'))
        .catch((e)=>console.log(table_name + ' table foreign key failed ❌' + e))
    }
}