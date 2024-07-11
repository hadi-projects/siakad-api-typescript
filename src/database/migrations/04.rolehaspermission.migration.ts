import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';

export default class RoleHasPermissionTable {
    static m = new MigrationsModel()
    static table_name:string = 'role_has_permissions'
    static columns:string[] = [
        'id',
        'role_id', 
        'resource_id', 
        'permission_id', 
        'created_at',
        'updated_at',
    ]

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} (
            ${this.columns[0]} ${Type.int} ${Type.primary_key} ${Type.primary_key},
            ${this.columns[1]} ${Type.int} ${Type.not_null},
            ${this.columns[2]} ${Type.int} ${Type.not_null},
            ${this.columns[3]} ${Type.int} ${Type.not_null},
            ${this.columns[4]} ${Type.datetime},
            ${this.columns[5]} ${Type.datetime}
            );
        `)
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