import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';

export default class AccessLogTable {
    static m = new MigrationsModel()
    static table_name:string = 'access_logs'
    static columns:string[] = [
        'id',
        'endpoint', 
        'ip',
        'method',
        'user',
        'header',
        'body',
        'updated_at',
    ]

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
        CREATE TABLE ${this.table_name} (
             ${this.columns[0]} ${Type.int} ${Type.primary_key} ${Type.auto_increment},
             ${this.columns[1]} ${Type.varchar()} ${Type.not_null},
             ${this.columns[2]} ${Type.varchar()} ${Type.not_null},
             ${this.columns[3]} ${Type.int} ${Type.not_null},
             ${this.columns[4]} ${Type.varchar()} ${Type.not_null},
             ${this.columns[5]} ${Type.json} ${Type.not_null},
             ${this.columns[6]} ${Type.json} ${Type.not_null},
             ${this.columns[7]} ${Type.datetime}
            );`)
            .then(() => {
                this.m.set_name(this.table_name)
                    .set_created_at().create()
                console.log(this.table_name + ' table migration success ✅')
            }).catch((e) => {
                    console.log(this.table_name + ' table migration failed ❌: ' + e)
                    process.exit(0)
    
                })
        }        
}