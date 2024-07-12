import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Table from './tabel';

export default class RoleTable {
    async migrate() {
        await new Table('roles', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            new KeyVal().setKey('name').setValue([Type.varchar(100), Type.not_null, Type.unique, ", "]),
            new KeyVal().setKey('created_at').setValue([Type.datetime, ", "]),
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}