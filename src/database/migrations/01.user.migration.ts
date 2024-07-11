import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';

export default class UserTable {
    static table_name: string = 'users'
    static columns: string[] = [
        'id',
        'name',
        'email',
        'password',
        'secret_key',
        'otpauth_url',
        'role_id',
        'status_id',
        'verify_token',
        'otp_verified_at',
        'email_verified_at',
        'created_at',
        'updated_at',
    ]
    
    static async migrate() {
        const m = new MigrationsModel()
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} (
            ${this.columns[0]} ${Type.int} ${Type.primary_key} ${Type.auto_increment},
            ${this.columns[1]} ${Type.varchar(100)} ${Type.not_null},
            ${this.columns[2]} ${Type.varchar(100)} ${Type.not_null} ,
            ${this.columns[3]} ${Type.varchar(100)} ${Type.not_null},
            ${this.columns[4]} ${Type.varchar(100)},
            ${this.columns[5]} ${Type.varchar()},
            ${this.columns[6]} ${Type.int} ${Type.not_null},
            ${this.columns[7]} ${Type.int} ${Type.not_null},
            ${this.columns[8]} ${Type.varchar(100)} ${Type.not_null},
            ${this.columns[9]} ${Type.datetime},
            ${this.columns[10]} ${Type.datetime},
            ${this.columns[11]} ${Type.datetime},
            ${this.columns[12]} ${Type.datetime}
            );
        `).then(() => {
            m.set_name(this.table_name)
                .set_created_at().create()
            console.log(this.table_name + ' table migration success ✅')
        }).catch((e) => {
                console.log(this.table_name + ' table migration failed ❌: ' + e)
                process.exit(0)

            })
    }
}

