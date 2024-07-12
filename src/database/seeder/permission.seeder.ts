import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'
import PermissionTable from '../migrations/06.permission.migration'
import PermissionsModel from '../../model/permission.model'
import Seeder from '../meta/seeder'

export default class PermissionSeeder {
    async seed() {
        await new Seeder('statuses', [
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
        ]).seed()
    }
}