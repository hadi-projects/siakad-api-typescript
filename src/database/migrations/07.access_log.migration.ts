import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';
import KeyVal from '../../model/keyval.model';
import Migration from './main';

export default class AccessLogTable {
    private table_name:string = 'access_logs'
    
    columns:KeyVal[] = [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('url').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('enpoint').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('ip').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('method').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('access').setValue([Type.json, Type.not_null, ", "]),
        new KeyVal().setKey('user').setValue([Type.json, Type.not_null, ", "]),
        new KeyVal().setKey('header').setValue([Type.json, Type.not_null, ", "]),
        new KeyVal().setKey('body').setValue([Type.json, Type.not_null, ", "]),
        new KeyVal().setKey('created_at').setValue([Type.datetime])
    ]
    
    get_table_name():string{
        return this.table_name
    }
    
    async migrate() {
        await new Migration().create_table(this.table_name, this.columns)
    }
}