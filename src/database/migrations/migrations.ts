import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';

export default class Migrations {
    static table_name:string = 'migrations'
    static columns:string[] = [
        'id',
        'table_name',
        'updated_at',
    ]

    static async migrate() {
        const m = new MigrationsModel()

        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
        CREATE TABLE ${this.table_name} (
            ${this.columns[0]} ${Type.int} ${Type.primary_key} ${Type.auto_increment},
            ${this.columns[1]} ${Type.varchar()} ${Type.not_null},
            ${this.columns[2]} ${Type.datetime}
            );`)
            .then(() => {
                m.set_name(this.table_name)
                    .set_created_at().create()
                console.log(this.table_name + ' table migration success ✅')
            }).catch((e) => {
                    console.log(this.table_name + ' table migration failed ❌: ' + e)
                    process.exit(0)
    
                })
            .catch((e)=>console.log(this.table_name + ' table migration failed ❌ :' + e))
        }        
}