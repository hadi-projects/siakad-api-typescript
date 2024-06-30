import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export class LogTable {
    static table_name:string = 'logs'

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
        CREATE TABLE ${this.table_name} (
            id INT PRIMARY KEY AUTO_INCREMENT,
            endpoint VARCHAR(255) NOT NULL,
            ip VARCHAR(255) NOT NULL,
            method VARCHAR(255) NOT NULL,
            header JSON NOT NULL,
            body JSON NOT NULL,
            created_at datetime
            );
            `)
            .then(()=>console.log(this.table_name + ' table migration success ✅'))
            .catch(()=>console.log(this.table_name + ' table migration failed ❌'))
        }        
}