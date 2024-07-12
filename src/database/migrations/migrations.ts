import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Table from './tabel';

export default class Migrations {
    async migrate() {
        await new Table('migrations', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            new KeyVal().setKey('table_name').setValue([Type.varchar(100), Type.not_null, Type.unique, " , "]),
            new KeyVal().setKey('created_at').setValue([Type.datetime])
        ]).migrate()
    }
}