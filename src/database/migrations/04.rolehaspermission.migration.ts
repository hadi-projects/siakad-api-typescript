import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export default class RoleHasPermissionTable {
    static table_name:string = 'role_has_permissions'

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} (
                id INT PRIMARY KEY AUTO_INCREMENT,
                role_id INT NOT NULL,
                resource_id INT NOT NULL,
                permission_id INT NOT NULL,
                created_at datetime,
                updated_at datetime
            );
        `)
        .then(()=>console.log(this.table_name + ' table migration success ✅'))
        .catch((e)=>console.log(this.table_name + ' table migration failed ❌: '+e))
    }
}