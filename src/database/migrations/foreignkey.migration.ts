import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import UserTable from './01.user.migration'
import RoleHasPermissionTable from './04.rolehaspermission.migration'

export default class ForeignTable {

    static async migrate() {
        // user
        await (await db).query<RowDataPacket[]>(`
            ALTER TABLE ${'users'} 
            ADD FOREIGN KEY (role_id) REFERENCES roles(id);`)
            .then(() => console.log('users' + ' table foreign key success ✅'))
            .catch((e) => console.log('users' + ' table foreign key failed ❌' + e))
            
        // role has permissions
        await (await db).query<RowDataPacket[]>(`
            ALTER TABLE ${'role_has_permissions'}`)
            .then(() => console.log('role_has_permissions' + ' table foreign key success ✅'))
            .catch((e) => console.log('role_has_permissions' + ' table foreign key failed ❌' + e))
            
        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${'role_has_permissions'}
            ADD FOREIGN KEY (permission_id) REFERENCES permissions(id);`)
            .then(() => console.log('role_has_permissions' + ' table foreign key success ✅'))
            .catch((e) => console.log('role_has_permissions' + ' table foreign key failed ❌' + e))

        await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${'role_has_permissions'}
            ADD FOREIGN KEY (role_id) REFERENCES roles(id);`)
            .then(() => console.log('role_has_permissions' + ' table foreign key success ✅'))
            .catch((e) => console.log('role_has_permissions' + ' table foreign key failed ❌' + e))
       
            await (await db).query<RowDataPacket[]>(`
        ALTER TABLE ${'role_has_permissions'}
            ADD FOREIGN KEY (resource_id) REFERENCES resources(id);`)
            .then(() => console.log('role_has_permissions' + ' table foreign key success ✅'))
            .catch((e) => console.log('role_has_permissions' + ' table foreign key failed ❌' + e))
    }
}