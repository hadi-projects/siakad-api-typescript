import d from 'mysql2'
import Keyval from '../../model/keyval.model';
import UserModel from '../../model/user.model';
import moment from 'moment';

export default class UserQuery {
    static datetime = moment().format().split("+")[0].replace("T", " ")

    static index() {
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
        JOIN roles ON roles.id = users.role_id;
        `;
    }

    static create(user: UserModel) {
        return `
        INSERT INTO users (
        name, email, password, role_id, status_id, verify_token, created_at
        ) VALUES (
        ${d.escape(user.get_name())}, ${d.escape(user.get_email())}, 
        ${d.escape(user.get_password())}, ${d.escape(user.get_role().get_id())},
        1, '', '${this.datetime}');
        `;
    }

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
        WHERE users.${keyval.getKey()} = ${d.escape(keyval.getValue())};`;
    }

    static edit(user: UserModel) {
        return `
        UPDATE users SET 
        users.name = CASE WHEN ${d.escape(user.get_name())} IS NULL THEN users.name ELSE ${d.escape(user.get_name())} END,
        users.email = CASE WHEN ${d.escape(user.get_email())} IS NULL THEN users.email ELSE ${d.escape(user.get_email())} END,
        users.password = CASE WHEN ${d.escape(user.get_password())} IS NULL THEN users.password ELSE ${d.escape(user.get_password())} END,
        users.role_id = CASE WHEN ${user.get_role() == undefined ? null : d.escape(user.get_role().get_id())} IS NULL THEN users.role_id ELSE ${user.get_role() == undefined ? null : d.escape(user.get_role().get_id())} END,
        users.status_id = CASE WHEN ${user.get_status() == undefined ? null : d.escape(user.get_status().get_id())} IS NULL THEN users.status_id ELSE ${user.get_role() == undefined ? null : d.escape(user.get_status().get_id())} END,
        users.secret_key = CASE WHEN ${d.escape(user.get_secret_key())} IS NULL THEN users.secret_key ELSE ${d.escape(user.get_secret_key())} END,
        users.otpauth_url = CASE WHEN ${d.escape(user.get_otpauth_url())} IS NULL THEN users.otpauth_url ELSE ${d.escape(user.get_otpauth_url())} END,
        users.verify_token = CASE WHEN ${d.escape(user.get_verify_token())} IS NULL THEN users.verify_token ELSE ${d.escape(user.get_verify_token())} END,
        users.updated_at = '${this.datetime}'
        WHERE users.id = ${d.escape(user.get_id())};`
    }
   
    static delete(keyval: Keyval) {
        return `DELETE FROM users WHERE ${keyval.getKey()} = ${d.escape(keyval.getValue())};`
    }
}
