import Type from '../meta/datatype';
import KeyVal from '../../model/keyval.model';
import Table from '../meta/tabel';

export default class StatusTable {
    async migrate() {
        await new Table('statuses', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            new KeyVal().setKey('name').setValue([Type.varchar(100), Type.not_null, Type.unique, ", "]),
            new KeyVal().setKey('status_key').setValue([Type.varchar(50), Type.not_null, ", "]),
            new KeyVal().setKey('status_id').setValue([Type.int, Type.not_null, ", "]),
            new KeyVal().setKey('created_at').setValue([Type.datetime, ", "]),
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}