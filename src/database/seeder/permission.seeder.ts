import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'
import PermissionTable from '../migrations/06.permission.migration'
import PermissionsModel from '../../model/permission.model'

export default class PermissionSeeder {

    static data:PermissionsModel[] = [
        new PermissionsModel().set_name("index")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("create")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("show")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("edit")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("delete")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("reset")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("freeze")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("generate")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("verify")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("login")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("logut")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("ping")
            .set_created_at()
            .set_updated_at(),
        new PermissionsModel().set_name("none")
            .set_created_at()
            .set_updated_at(),
    ]

    static async seed(){
        await (await db).query(`DELETE FROM ${PermissionTable.table_name}`)
        await (await db).query(`ALTER TABLE ${PermissionTable.table_name} AUTO_INCREMENT = 1`)
        for(var i=0;i<this.data.length;i++){
            await this.data[i].create()
        }
    }
}