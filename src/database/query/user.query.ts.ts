import d from 'mysql2'
import Keyval from '../../model/keyval.model';
import UserModel from '../../model/user.model';
import moment from 'moment';

export default class UserQuery {
    static datetime = moment().format().split("+")[0].replace("T", " ")

    static show(keyval: Keyval) {
        return `
        SELECT 
            users.id AS id,
            users.name AS name, 
            users.email AS email, 
            users.password AS password, 
            roles.id AS role_id, 
            roles.name AS role_name, 
            statuses.status_id AS status_id, 
            statuses.name AS status_name, 
            users.secret_key AS secret_key, 
            users.otpauth_url AS otpauth_url, 
            users.verify_token AS verify_token,
            users.updated_at AS updated_at, 
            users.created_at AS created_at
        FROM users 
        JOIN statuses ON statuses.status_id = users.status_id AND statuses.status_key = 'user'
        JOIN roles ON roles.id = users.role_id
        WHERE ${keyval.getKey()} = ${d.escape(keyval.getValue())};`;
    }

    static create_token(user:UserModel){
        console.log(user);
        
        return `
        UPDATE users SET verify_token = ${d.escape(user.getVerifyToken())} 
        WHERE id = ${d.escape(user.getId())};
        `
    }
   
    static create_otp(user:UserModel){
        console.log(user);
        
        return `
        UPDATE users SET verify_token = ${d.escape(user.getVerifyToken())} 
        WHERE id = ${d.escape(user.getId())};
        `
    }

    // static edit(user: UserModel) {
    //     console.log(user);
        
    //     return `
    //     UPDATE users SET 
    //     users.name = CASE
    //         WHEN ${d.escape(user.getName())} = null THEN users.name
    //         WHEN ${d.escape(user.getName())} = '' THEN users.name
    //         ELSE users.name
    //     END,
    //     users.email = CASE
    //         WHEN ${d.escape(user.getEmail())} = null THEN users.email
    //         WHEN ${d.escape(user.getEmail())} = '' THEN users.email
    //         ELSE ${d.escape(user.getEmail())}
    //     END,
    //     users.password = CASE
    //         WHEN ${d.escape(user.getPassword())} = null THEN users.password
    //         WHEN ${d.escape(user.getPassword())} = '' THEN users.password
    //         ELSE ${d.escape(user.getPassword())}
    //     END,
    //     users.role_id = CASE
    //         WHEN ${d.escape(user.getRole().getId())} = null THEN users.role_id
    //         WHEN ${d.escape(user.getRole().getId())} = '' THEN users.role_id
    //         ELSE ${d.escape(user.getRole().getId())}
    //     END,
    //     users.status_id = CASE
    //         WHEN ${d.escape(user.getStatus().getId())} = null THEN users.status_id
    //         WHEN ${d.escape(user.getStatus().getId())} = '' THEN users.status_id
    //         ELSE ${d.escape(user.getStatus().getId())}
    //     END,
    //     users.secret_key = CASE
    //         WHEN ${d.escape(user.getSecretKey())} = null THEN users.secret_key
    //         WHEN ${d.escape(user.getSecretKey())} = '' THEN users.secret_key
    //         ELSE ${d.escape(user.getSecretKey())}
    //     END,
    //     users.otpauth_url = CASE
    //         WHEN ${d.escape(user.getOtpauthUrl())} = null THEN users.otpauth_url
    //         WHEN ${d.escape(user.getOtpauthUrl())} = '' THEN users.otpauth_url
    //         ELSE ${d.escape(user.getOtpauthUrl())}
    //     END,
    //     users.verify_token = CASE
    //         WHEN ${d.escape(user.getVerifyToken())} = null THEN users.verify_token
    //         WHEN ${d.escape(user.getVerifyToken())} = '' THEN users.verify_token
    //         ELSE ${d.escape(user.getVerifyToken())}
    //     END,
    //     users.updated_at = ${this.datetime}
    //     WHERE users.id = ${d.escape(user.getId())};
    //     `
    // }
}
	