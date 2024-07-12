import db from '../database/database'
import Logger from "../service/logger";
import { RowDataPacket } from 'mysql2/promise';
import Keyval from '../model/keyval.model';
import UserModel from '../model/user.model';
import RoleModel from '../model/role.model';
import StatusModel from '../model/status.model';
import UserQuery from '../database/query/user.query.ts';


interface re {
    result: UserModel | boolean
}

export default class UserRepository {
    logger = new Logger()
    error_logger = this.logger.errorLogger()



    async index() {
        let users: any[] = []
        await (await db).query<RowDataPacket[]>(UserQuery.index())
        .then(([data, field]) => {
            
            
            const result = JSON.parse(JSON.stringify(data))
            if (result == undefined) return null
            for (var i = 0; i < result.length; i++) {
                    users.push(
                        new UserModel().set_id(result.id)
                        .set_name(result.name)
                        .set_email(result.email)
                        .set_password(result.password)
                        .set_secret_key(result.secret_key)
                        .set_otpauth_url(result.otpauth_url)
                        .set_role(new RoleModel().set_id(result.role_id).set_name(result.role_name))
                        .set_status(new StatusModel().set_id(result.status_id).set_name(result.status_id))
                        .set_created_at(result.created_at)
                        .set_updated_at(result.updated_at)
                    )
                }
            })
            .catch((err: any) => this.error_logger.error({ message: err, system: "mysql" }))
        return users
    }


    async create(user: UserModel): Promise<any> {
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.create(user))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => {
                this.error_logger.error({ message: err, system: "mysql" })
                return status = err
            })
        return status
    }
    
    async edit(user: UserModel): Promise<any> {

        
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.edit(user))
        .then(([data, field]) => {
                console.log(data);
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => {
                this.error_logger.error({ message: err, system: "mysql" })
                return status = err
            })
        return status
    }


    async show(keyval: Keyval):Promise<UserModel> {
        const user = new UserModel()

        await (await db).query<RowDataPacket[]>(UserQuery.show(keyval))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))[0]
                if (result == undefined) return null
                return user.set_id(result.id)
                    .set_name(result.name)
                    .set_email(result.email)
                    .set_password(result.password)
                    .set_secret_key(result.secret_key)
                    .set_otpauth_url(result.otpauth_url)
                    .set_role(new RoleModel().set_id(result.role_id).set_name(result.role_name))
                    .set_status(new StatusModel().set_id(result.status_id).set_name(result.status_id))
                    .set_created_at(result.created_at)
                    .set_updated_at(result.updated_at)
            })
            .catch((err: any) => {
                this.error_logger.error({ message: err, system: "mysql" })
                return new Error(err)
            })
            return user
    }

    async delete(keyval: Keyval) {
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.delete(keyval))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => {
                this.error_logger.error({ message: err, system: "mysql" })
                err = err.message
            })
        return status
    }

    async create_otp(user: UserModel) {
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.edit(user))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => this.error_logger.error({ message: err, system: "mysql" }))
        return status
    }

    async verified_otp(user: UserModel) {

        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.edit(user))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => this.error_logger.error({ message: err, system: "mysql" }))
        return status
    }
}