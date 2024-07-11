import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'
import ResourceModel from '../../model/resource.model'
import ResourceTable from '../migrations/05.resources.migration'

export default class ResourceSeeder {
    static data: ResourceModel[] = [
        new ResourceModel().set_name("auth")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("user")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("otp")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("kuangan")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("kurikulum")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("laporan")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("jurnal")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("penilaian")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("cuti")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("jadwal")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("khs")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("krs")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("nilai")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("pembayaran")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("tugas")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("wisuda")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("notifikasi")
            .set_created_at()
            .set_updated_at(),
        new ResourceModel().set_name("util")
            .set_created_at()
            .set_updated_at(),
    ]

    static async seed() {
        await (await db).query(`DELETE FROM ${ResourceTable.table_name}`)
        await (await db).query(`ALTER TABLE ${ResourceTable.table_name} AUTO_INCREMENT = 1`)
        for (var i = 0; i < this.data.length; i++) {
            await this.data[i].create()
        }
    }
}
