import StatusModel from '../../model/status.model'
import db from '../database'
import StatusTable from '../migrations/03.status.migration'

export default class StatusSeeder {
    
    static data:StatusModel[] = [
        new StatusModel().set_name("GENERATE OTP")
            .set_status_key("user")
            .set_status_id("1")
            .set_created_at()
            .set_updated_at(),
        new StatusModel().set_name("VERIFY OTP")
            .set_status_key("user")
            .set_status_id("2")
            .set_created_at()
            .set_updated_at(),
        new StatusModel().set_name("ACTIVE")
            .set_status_key("user")
            .set_status_id("3")
            .set_created_at()
            .set_updated_at(),
        new StatusModel().set_name("FREEZED")
            .set_status_key("user")
            .set_status_id("4")
            .set_created_at()
            .set_updated_at(),
    ]

    static async seed(){
        await (await db).query(`DELETE FROM ${StatusTable.table_name}`)
        await (await db).query(`ALTER TABLE ${StatusTable.table_name} AUTO_INCREMENT = 1`)
        for(var i=0;i<this.data.length;i++){
            await this.data[i].create()
        }
    }
}