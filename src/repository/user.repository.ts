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
                    const user = new UserModel()

                    user.setId(result[i].id)
                    user.setName(result[i].name)
                    user.setEmail(result[i].email)
                    user.setPassword(result[i].password)
                    user.setRole(RoleModel.setRoleModel(result[i].role_id, result[i].role_name))
                    user.setStatus(StatusModel.setStatusModel(result[i].status_id, result[i].status_name))
                    user.setCreatedAt(result[i].created_at)
                    user.setUpdatedAt(result.updated_at)
                    users.push(user)
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


    async show(keyval: Keyval) {
        const user = new UserModel()

        await (await db).query<RowDataPacket[]>(UserQuery.show(keyval))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))[0]
                if (result == undefined) return null
                    user.setId(result.id)
                    user.setName(result.name)
                    user.setEmail(result.email)
                    user.setPassword(result.password)
                    user.setSecretKey(result.secret_key)
                    user.setOtpauthUrl(result.otpauth_url)
                    user.setRole(RoleModel.setRoleModel(result.role_id, result.role_name))
                    user.setStatus(StatusModel.setStatusModel(result.status_id, result.status_name))
                    user.setCreatedAt(result.created_at)
                    user.setUpdatedAt(result.updated_at)
            })
            .catch((err: any) => {
                this.error_logger.error({ message: err, system: "mysql" })
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