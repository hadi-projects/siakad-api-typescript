import RoleModel from '../../model/role.model'
import db from '../database'
import RoleTable from '../migrations/02.role.migration'

export default class RoleSeeder {
    
    static data:RoleModel[] = [
        new RoleModel().set_name("root").set_created_at().set_updated_at(),
        new RoleModel().set_name("admin").set_created_at().set_updated_at(),
        new RoleModel().set_name("member").set_created_at().set_updated_at(),
        new RoleModel().set_name("mahasiswa").set_created_at().set_updated_at(),
        new RoleModel().set_name("auth").set_created_at().set_updated_at()
    ]

    static async seed(){
        await (await db).query(`DELETE FROM ${RoleTable.table_name}`)
        await (await db).query(`ALTER TABLE ${RoleTable.table_name} AUTO_INCREMENT = 1`)
        for(var i=0;i<this.data.length;i++){
            await this.data[i].create()
        }
    }
}