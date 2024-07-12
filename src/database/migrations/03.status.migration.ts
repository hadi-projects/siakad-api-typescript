import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Migration from './main';

export default class StatusTable {
    private table_name:string = 'statuses'
    
    columns:KeyVal[] = [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('name').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('status_key').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('status_id').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('created_at').setValue([Type.datetime, ", "]),
        new KeyVal().setKey('updated_at').setValue([Type.datetime])
    ]
    
    get_table_name():string{
        return this.table_name
    }
    
    async migrate() {
        await new Migration().create_table(this.table_name, this.columns)
    }
}