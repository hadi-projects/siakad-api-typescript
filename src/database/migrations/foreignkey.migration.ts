import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import UserTable from './01.user.migration'
import RoleHasPermissionTable from './04.rolehaspermission.migration'

export default class ForeignTable {

    static async migrate() {
        // user
        await (await db).query<RowDataPacket[]>(`
            ALTER TABLE ${new UserTable().get_table_name()} 
            ADD FOREIGN KEY (role_id) REFERENCES roles(id);`)
            .then(() => console.log(new UserTable().get_table_name() + ' table foreign key success ✅'))
            .catch((e) => console.log(new UserTable().get_table_name() + ' table foreign key failed ❌' + e))
            
        // role has permissions
        await (await db).query<RowDataPacket[]>(`
            ALTER TABLE ${new RoleHasPermissionTable().get_table_name()}`)
            .then(() => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key success ✅'))
            .catch((e) => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key failed ❌' + e))
            
        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${new RoleHasPermissionTable().get_table_name()}
            ADD FOREIGN KEY (permission_id) REFERENCES permissions(id);`)
            .then(() => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key success ✅'))
            .catch((e) => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key failed ❌' + e))

        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${new RoleHasPermissionTable().get_table_name()}
            ADD FOREIGN KEY (role_id) REFERENCES roles(id);`)
            .then(() => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key success ✅'))
            .catch((e) => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key failed ❌' + e))
       
            await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${new RoleHasPermissionTable().get_table_name()}
            ADD FOREIGN KEY (resource_id) REFERENCES resources(id);`)
            .then(() => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key success ✅'))
            .catch((e) => console.log(new RoleHasPermissionTable().get_table_name() + ' table foreign key failed ❌' + e))
    }
}