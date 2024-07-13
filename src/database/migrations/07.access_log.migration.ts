import Type from '../meta/datatype';
import KeyVal from '../../model/keyval.model';
import Table from '../meta/tabel';

export default class AccessLogTable {
    async migrate() {
        await new Table('access_logs', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            new KeyVal().setKey('url').setValue([Type.varchar(100), Type.not_null, ", "]),
            new KeyVal().setKey('endpoint').setValue([Type.varchar(100), Type.not_null, ", "]),
            new KeyVal().setKey('ip').setValue([Type.varchar(100), Type.not_null, ", "]),
            new KeyVal().setKey('method').setValue([Type.varchar(100), Type.not_null, ", "]),
            new KeyVal().setKey('access').setValue([Type.json, Type.not_null, ", "]),
            new KeyVal().setKey('user').setValue([Type.json, Type.not_null, ", "]),
            new KeyVal().setKey('header').setValue([Type.json, Type.not_null, ", "]),
            new KeyVal().setKey('request_body').setValue([Type.json, Type.not_null, ", "]),
            new KeyVal().setKey('created_at').setValue([Type.datetime])
        ]).migrate()
    }
}