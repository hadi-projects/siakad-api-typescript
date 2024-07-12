import Type from '../meta/datatype';
import KeyVal from '../../model/keyval.model';
import Table from '../meta/tabel';

export default class RoleHasPermissionTable {  
    async migrate() {
        await new Table('role_has_permissions', [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('role_id').setValue([Type.int, Type.not_null, " , "]),
        new KeyVal().setKey('resource_id').setValue([Type.int, Type.not_null, " , "]),
        new KeyVal().setKey('permission_id').setValue([Type.int, Type.not_null, " , "]),
        new KeyVal().setKey('created_at').setValue([Type.datetime, " , "]),
        new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}