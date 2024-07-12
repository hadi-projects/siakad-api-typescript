import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Migration from './main';

export default class SystemLogTable {
    private table_name:string = 'system_logs'
    
    columns:KeyVal[] = [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('level').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('message').setValue([Type.json, Type.not_null, ", "]),
        new KeyVal().setKey('systems').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('services').setValue([Type.datetime, ", "]),
        new KeyVal().setKey('updated_at').setValue([Type.datetime])
    ]
    
    get_table_name():string{
        return this.table_name
    }
    
    async migrate() {
        await new Migration().create_table(this.table_name, this.columns)
    }     
}