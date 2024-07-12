import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Migration from './main';

export default class UserTable {
    private table_name:string = 'users'
    
    columns:KeyVal[] = [
        new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
        new KeyVal().setKey('name').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('email').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('password').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('secret_key').setValue([Type.varchar(100), ", "]),
        new KeyVal().setKey('otpauth_url').setValue([Type.varchar(100), ", "]),
        new KeyVal().setKey('role_id').setValue([Type.int, Type.not_null, ", "]),
        new KeyVal().setKey('status_id').setValue([Type.int, Type.not_null, ", "]),
        new KeyVal().setKey('verify_token').setValue([Type.varchar(100), ", "]),
        new KeyVal().setKey('otp_verified_at').setValue([Type.varchar(100), Type.not_null, ", "]),
        new KeyVal().setKey('email_verified_at').setValue([Type.varchar(100), Type.not_null, ", "]),
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

