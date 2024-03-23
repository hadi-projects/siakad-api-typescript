import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export default class RoleTable {
    static table_name:string = 'roles'

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                created_at datetime,
                updated_at datetime
            );`)
        .then(()=>console.log(this.table_name + ' table migration success ✅'))
        .catch(()=>console.log(this.table_name + ' table migration failed ❌'))
    }
}