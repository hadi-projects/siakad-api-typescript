import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export class PermissionTable {
    static table_name:string = 'permissions'

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
        CREATE TABLE ${this.table_name} (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            created_at datetime,
            updated_at datetime
            );
            `)
            .then(()=>console.log(this.table_name + ' table migration success ✅'))
            .catch(()=>console.log(this.table_name + ' table migration failed ❌'))
        }        
}