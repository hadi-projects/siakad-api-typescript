import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import Type from './datatype';
import MigrationsModel from '../../model/migration.model';
import KeyVal from '../../model/keyval.model';
import Migration from './main';
import Table from './tabel';

export default class AccessLogTable {
    async migrate() {
        await new Table('access_logs', [
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
        ]).migrate()
    }
}