import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Migration from './main';

export default class RoleHasPermissionTable {

    private table_name:string = 'role_has_permissions'

    columns:KeyVal[] = [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('role_id').setValue([Type.int, Type.not_null, Type.unique, " , "]),
        new KeyVal().setKey('resource_id').setValue([Type.int, Type.not_null, " , "]),
        new KeyVal().setKey('permission_id').setValue([Type.int, Type.not_null, " , "]),
        new KeyVal().setKey('created_at').setValue([Type.datetime, " , "]),
        new KeyVal().setKey('updated_at').setValue([Type.datetime])
    ]
    
    get_table_name():string{
        return this.table_name
    }
    
    async migrate() {
        await new Migration().create_table(this.table_name, this.columns)
    }       
}