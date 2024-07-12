import Type from '../meta/datatype';
import KeyVal from '../../model/keyval.model';
import Table from '../meta/tabel';

export default class SystemLogTable {   
    async migrate() {
        await new Table('system_logs', [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('level').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('message').setValue([Type.json, Type.not_null, ", "]),
        new KeyVal().setKey('systems').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('services').setValue([Type.datetime, ", "]),
        new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}