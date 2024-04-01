import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'

export default class RoleHasPermissionSeeder {
    static table_name: string = 'role_has_permissions'
    static datetime = moment().format().split("+")[0].replace("T", " ")


    static async seed() {
        await (await db).query<RowDataPacket[]>(`
        INSERT INTO ${this.table_name} (
            role_id, resource_id, permission_id, created_at, updated_at
        ) VALUES 
        (1, 1, 10, '${this.datetime}', '${this.datetime}'), 
        (1, 1, 11, '${this.datetime}', '${this.datetime}'),

        (1, 2, 1, '${this.datetime}', '${this.datetime}'),
        (1, 2, 2, '${this.datetime}', '${this.datetime}'),
        (1, 2, 3, '${this.datetime}', '${this.datetime}'),
        (1, 2, 4, '${this.datetime}', '${this.datetime}'),
        (1, 2, 5, '${this.datetime}', '${this.datetime}'),
        (1, 2, 6, '${this.datetime}', '${this.datetime}'),
        (1, 2, 7, '${this.datetime}', '${this.datetime}'),
        
        (1, 3, 6, '${this.datetime}', '${this.datetime}'),
        (1, 3, 8, '${this.datetime}', '${this.datetime}'),
        (1, 3, 9, '${this.datetime}', '${this.datetime}'),
        
        (1, 4, 1, '${this.datetime}', '${this.datetime}'),
        (1, 4, 2, '${this.datetime}', '${this.datetime}'),
        (1, 4, 3, '${this.datetime}', '${this.datetime}'),
        (1, 4, 4, '${this.datetime}', '${this.datetime}'),
        (1, 4, 5, '${this.datetime}', '${this.datetime}'),
        (1, 4, 6, '${this.datetime}', '${this.datetime}'),
        (1, 4, 7, '${this.datetime}', '${this.datetime}'),

        (1, 5, 1, '${this.datetime}', '${this.datetime}'),
        (1, 5, 2, '${this.datetime}', '${this.datetime}'),
        (1, 5, 3, '${this.datetime}', '${this.datetime}'),
        (1, 5, 4, '${this.datetime}', '${this.datetime}'),
        (1, 5, 5, '${this.datetime}', '${this.datetime}'),
        (1, 5, 6, '${this.datetime}', '${this.datetime}'),
        (1, 5, 7, '${this.datetime}', '${this.datetime}'),

        (1, 6, 1, '${this.datetime}', '${this.datetime}'),
        (1, 6, 2, '${this.datetime}', '${this.datetime}'),
        (1, 6, 3, '${this.datetime}', '${this.datetime}'),
        (1, 6, 4, '${this.datetime}', '${this.datetime}'),
        (1, 6, 5, '${this.datetime}', '${this.datetime}'),
        (1, 6, 6, '${this.datetime}', '${this.datetime}'),
        (1, 6, 7, '${this.datetime}', '${this.datetime}'),

        (1, 7, 1, '${this.datetime}', '${this.datetime}'),
        (1, 7, 2, '${this.datetime}', '${this.datetime}'),
        (1, 7, 3, '${this.datetime}', '${this.datetime}'),
        (1, 7, 4, '${this.datetime}', '${this.datetime}'),
        (1, 7, 5, '${this.datetime}', '${this.datetime}'),
        (1, 7, 6, '${this.datetime}', '${this.datetime}'),
        (1, 7, 7, '${this.datetime}', '${this.datetime}'),

        (1, 8, 1, '${this.datetime}', '${this.datetime}'),
        (1, 8, 2, '${this.datetime}', '${this.datetime}'),
        (1, 8, 3, '${this.datetime}', '${this.datetime}'),
        (1, 8, 4, '${this.datetime}', '${this.datetime}'),
        (1, 8, 5, '${this.datetime}', '${this.datetime}'),
        (1, 8, 6, '${this.datetime}', '${this.datetime}'),
        (1, 8, 7, '${this.datetime}', '${this.datetime}'),
        
        (1, 9, 1, '${this.datetime}', '${this.datetime}'),
        (1, 9, 2, '${this.datetime}', '${this.datetime}'),
        (1, 9, 3, '${this.datetime}', '${this.datetime}'),
        (1, 9, 4, '${this.datetime}', '${this.datetime}'),
        (1, 9, 5, '${this.datetime}', '${this.datetime}'),
        (1, 9, 6, '${this.datetime}', '${this.datetime}'),
        (1, 9, 7, '${this.datetime}', '${this.datetime}'),

        (1, 10, 1, '${this.datetime}', '${this.datetime}'),
        (1, 10, 2, '${this.datetime}', '${this.datetime}'),
        (1, 10, 3, '${this.datetime}', '${this.datetime}'),
        (1, 10, 4, '${this.datetime}', '${this.datetime}'),
        (1, 10, 5, '${this.datetime}', '${this.datetime}'),
        (1, 10, 6, '${this.datetime}', '${this.datetime}'),
        (1, 10, 7, '${this.datetime}', '${this.datetime}'),

        (1, 11, 1, '${this.datetime}', '${this.datetime}'),
        (1, 11, 2, '${this.datetime}', '${this.datetime}'),
        (1, 11, 3, '${this.datetime}', '${this.datetime}'),
        (1, 11, 4, '${this.datetime}', '${this.datetime}'),
        (1, 11, 5, '${this.datetime}', '${this.datetime}'),
        (1, 11, 6, '${this.datetime}', '${this.datetime}'),
        (1, 11, 7, '${this.datetime}', '${this.datetime}'),

        (1, 12, 1, '${this.datetime}', '${this.datetime}'),
        (1, 12, 2, '${this.datetime}', '${this.datetime}'),
        (1, 12, 3, '${this.datetime}', '${this.datetime}'),
        (1, 12, 4, '${this.datetime}', '${this.datetime}'),
        (1, 12, 5, '${this.datetime}', '${this.datetime}'),
        (1, 12, 6, '${this.datetime}', '${this.datetime}'),
        (1, 12, 7, '${this.datetime}', '${this.datetime}'),

        (1, 13, 1, '${this.datetime}', '${this.datetime}'),
        (1, 13, 2, '${this.datetime}', '${this.datetime}'),
        (1, 13, 3, '${this.datetime}', '${this.datetime}'),
        (1, 13, 4, '${this.datetime}', '${this.datetime}'),
        (1, 13, 5, '${this.datetime}', '${this.datetime}'),
        (1, 13, 6, '${this.datetime}', '${this.datetime}'),
        (1, 13, 7, '${this.datetime}', '${this.datetime}'),
        (1, 13, 1, '${this.datetime}', '${this.datetime}'),

        (1, 14, 1, '${this.datetime}', '${this.datetime}'),
        (1, 14, 2, '${this.datetime}', '${this.datetime}'),
        (1, 14, 3, '${this.datetime}', '${this.datetime}'),
        (1, 14, 4, '${this.datetime}', '${this.datetime}'),
        (1, 14, 5, '${this.datetime}', '${this.datetime}'),
        (1, 14, 6, '${this.datetime}', '${this.datetime}'),
        (1, 14, 7, '${this.datetime}', '${this.datetime}'),

        (1, 15, 1, '${this.datetime}', '${this.datetime}'),
        (1, 15, 2, '${this.datetime}', '${this.datetime}'),
        (1, 15, 3, '${this.datetime}', '${this.datetime}'),
        (1, 15, 4, '${this.datetime}', '${this.datetime}'),
        (1, 15, 5, '${this.datetime}', '${this.datetime}'),
        (1, 15, 6, '${this.datetime}', '${this.datetime}'),
        (1, 15, 7, '${this.datetime}', '${this.datetime}'),

        (1, 16, 1, '${this.datetime}', '${this.datetime}'),
        (1, 16, 2, '${this.datetime}', '${this.datetime}'),
        (1, 16, 3, '${this.datetime}', '${this.datetime}'),
        (1, 16, 4, '${this.datetime}', '${this.datetime}'),
        (1, 16, 5, '${this.datetime}', '${this.datetime}'),
        (1, 16, 6, '${this.datetime}', '${this.datetime}'),
        (1, 16, 7, '${this.datetime}', '${this.datetime}'),

        (1, 17, 1, '${this.datetime}', '${this.datetime}'),
        (1, 17, 2, '${this.datetime}', '${this.datetime}'),
        (1, 17, 3, '${this.datetime}', '${this.datetime}'),
        (1, 17, 4, '${this.datetime}', '${this.datetime}'),
        (1, 17, 5, '${this.datetime}', '${this.datetime}'),
        (1, 17, 6, '${this.datetime}', '${this.datetime}'),
        (1, 17, 7, '${this.datetime}', '${this.datetime}'),
       
        (1, 18, 1, '${this.datetime}', '${this.datetime}'),
        (1, 18, 2, '${this.datetime}', '${this.datetime}'),
        (1, 18, 3, '${this.datetime}', '${this.datetime}'),
        (1, 18, 4, '${this.datetime}', '${this.datetime}'), 
        (1, 18, 5, '${this.datetime}', '${this.datetime}'),
        (1, 18, 6, '${this.datetime}', '${this.datetime}'),
        (1, 18, 7, '${this.datetime}', '${this.datetime}'),
        
        (5, 1, 10, '${this.datetime}', '${this.datetime}'), 
        (5, 1, 11, '${this.datetime}', '${this.datetime}'),

        (5, 3, 8, '${this.datetime}', '${this.datetime}'), 
        (5, 3, 9, '${this.datetime}', '${this.datetime}'),

        (5, 1, 12, '${this.datetime}', '${this.datetime}');
    `)
            .then((value) => {
                console.log(this.table_name + ' table seeding success ✅');
            })
            .catch((e) => console.log(this.table_name + ' table seeding failed ❌' + e))
    }
}