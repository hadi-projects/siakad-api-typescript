import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';

export default class PermissionTable {
    static table_name:string = 'permissions'
    static columns:string[] = [
        'id',
        'name', 
        'created_at',
        'updated_at',
    ]

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
        CREATE TABLE ${this.table_name} (
            ${this.columns[0]} ${Type.int} ${Type.primary_key} ${Type.auto_increment},
            ${this.columns[1]} ${Type.varchar()} ${Type.not_null},
            ${this.columns[2]} ${Type.datetime},
            ${this.columns[3]} ${Type.datetime});
            `)
            .then(()=>console.log(this.table_name + ' table migration success ✅'))
            .catch((e)=>console.log(this.table_name + ' table migration failed ❌: ' + e))
        }        
}