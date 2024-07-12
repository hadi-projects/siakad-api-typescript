import StatusModel from '../../model/status.model'
import Seeder from '../meta/seeder'

export default class StatusSeeder {
    async seed(){
        await new Seeder('statuses', [
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
        ]).seed()
    }
}