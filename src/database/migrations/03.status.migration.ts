import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Table from './tabel';

export default class StatusTable {
    async migrate() {
        await new Table('statuses', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            new KeyVal().setKey('name').setValue([Type.varchar(100), Type.not_null, Type.unique, ", "]),
            new KeyVal().setKey('created_at').setValue([Type.datetime, ", "]),
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}