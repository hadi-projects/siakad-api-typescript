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
       
        table_name = 'role_has_permissions'
        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${table_name} 
            ADD FOREIGN KEY (resource_id) REFERENCES resources(id);
        `)
        .then(()=>console.log(table_name + ' table foreign key success ✅'))
        .catch((e)=>console.log(table_name + ' table foreign key failed ❌' + e))
        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${table_name}
            ADD FOREIGN KEY (permission_id) REFERENCES permissions(id);
        `)
        .then(()=>console.log(table_name + ' table foreign key success ✅'))
        .catch((e)=>console.log(table_name + ' table foreign key failed ❌' + e))
        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${table_name}
            ADD FOREIGN KEY (role_id) REFERENCES roles(id);
        `)
        .then(()=>console.log(table_name + ' table foreign key success ✅'))
        .catch((e)=>console.log(table_name + ' table foreign key failed ❌' + e))
       
    }
}