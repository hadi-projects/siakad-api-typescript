import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import d from 'mysql2'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';
import Logger from '../../service/logger';
import KeyVal from '../../model/keyval.model';
import Migration from './migrate';

export default class Migrations {
    static table_name:string = 'migrations'
    static columns:KeyVal[] = [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('table_name').setValue([Type.varchar(100), Type.not_null, " , "]),
        new KeyVal().setKey('created_at').setValue([Type.datetime])
    ]

    static async migrate() {
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} ( ${Migration.create_table_format(this.columns)} );`)
            .then(async () => {
                await new MigrationsModel().set_name(this.table_name)
                    .set_created_at().create()
                console.log(this.table_name + ' table migration success ✅')
            })
            .catch((e) => {
                    console.log(this.table_name + ' table migration failed ❌: ' + e.message)
                    new Logger().errorLogger().error({ message: e.message, system: "mysql" })
                    process.exit(0)
                })
        }        
}