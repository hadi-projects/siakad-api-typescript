import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export default class SystemLogTable {
    static table_name:string = 'system_logs'

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
        CREATE TABLE ${this.table_name} (
            id INT PRIMARY KEY AUTO_INCREMENT,
            level VARCHAR(255) NOT NULL,
            message JSON NOT NULL,
            systems VARCHAR(255) NOT NULL,
            services VARCHAR(255) NOT NULL,
            created_at datetime);
            `)
            .then(()=>console.log(this.table_name + ' table migration success ✅'))
            .catch((e)=>console.log(this.table_name + ' table migration failed ❌ :' + e))
        }        
}