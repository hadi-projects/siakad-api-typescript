import { RowDataPacket } from 'mysql2/promise'
import db from '../database'

export default class UserTable {
    static table_name:string = 'users'

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL,
                secret_key VARCHAR(100),
                otpauth_url VARCHAR(250),
                role_id INT NOT NULL,
                status_id INT NOT NULL,
                verify_token VARCHAR(100) NOT NULL,
                otp_verified_at datetime,
                email_verified_at datetime,
                created_at datetime,
                updated_at datetime
            );
        `)
        .then(()=>console.log(this.table_name + ' table migration success ✅'))
        .catch((e)=>console.log(this.table_name + ' table migration failed ❌' + e))
    }
}