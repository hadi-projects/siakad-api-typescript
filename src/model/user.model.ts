import moment from "moment"
import UserTable from "../database/migrations/01.user.migration"
import Action from "../enum/action.enum"
import Model from "./model"
import RoleModel from "./role.model"
import StatusModel from "./status.model"
import d from 'mysql2'

class UserModel extends Model {
    private id!: any
    private name!: any
    private email!: any
    private password!: any
    private role!: RoleModel
    private status!: StatusModel
    private secret_key!: any
    private otpauth_url!: any
    private verify_token!: any
    private otp_verified_at!: any
    private email_verified_at!: any
    private otp!: any
    private action: Action
    private jwt_token: object
    private created_at: any
    private updated_at: any


    constructor() {
        super()
        super.set_table_name(UserTable.table_name)
        super.set_columns(UserTable.columns)
    }

    // values
    v: string[] = []

    set_id(id: string): UserModel {
        this.id = id
        return this
    }

    set_name(name: string): UserModel {
        this.name = name;
        this.v.push(d.escape(name))
        return this
    }

    set_email(email: any): UserModel {
        this.email = email;
        this.v.push(d.escape(email))
        return this
    }

    set_password(password: string): UserModel {
        this.password = password;
        this.v.push(d.escape(password))
        return this
    }

    set_role(role: RoleModel): UserModel {
        this.role = role;
        this.v.push(d.escape(role.get_id()))
        return this
    }
    
    set_status(status: StatusModel): UserModel {
        this.status = status
        this.v.push(d.escape(status.get_id()))
        return this
    }

    set_secret_key(secret_key: string): UserModel {
        this.secret_key = secret_key;
        this.v.push(d.escape(secret_key))
        return this
    }
    set_otpauth_url(otpauth_url: string): UserModel {
        this.otpauth_url = otpauth_url;
        this.v.push(d.escape(otpauth_url))
        return this
    }

    set_verify_token(verify_token: string): UserModel {
        this.verify_token = verify_token;
        this.v.push(d.escape(verify_token))
        return this
    }
    set_otp(otp: string): UserModel {
        this.otp = otp
        return this
    }

    set_jwt_token(jwt_token: object) {
        this.jwt_token = jwt_token
        return this
    }

    set_action(action: Action): UserModel {
        this.action = action
        return this
    }

    set_otp_verified_at(): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.otp_verified_at = date;
        this.v.push(d.escape(date))
        return this
    }
    set_email_verified_at(): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.email_verified_at = date;
        this.v.push(d.escape(date))
        return this
    }

    public set_created_at(dt:string=''): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.created_at = dt==''?date:dt
        this.v.push(d.escape((date)))
        return this
    }
    public set_updated_at(dt:string=''): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.updated_at = dt==''?date:dt
        this.v.push((d.escape(date)))
        return this
    }

    get_id(): string {
        return this.id
    }

    get_name(): string {
        return this.name
    }
    get_email(): string {
        return this.email
    }
    get_password(): string {
        return this.password
    }
    get_role(): RoleModel {
        return this.role
    }
    get_status(): StatusModel {
        return this.status
    }
    get_secret_key(): string {
        return this.secret_key
    }
    get_otpauth_url(): string {
        return this.otpauth_url
    }
    get_otp_verified_at(): string {
        return this.otp_verified_at
    }

    get_jwt_token(): object {
        return this.jwt_token
    }
    get_verify_token(): string {
        return this.verify_token
    }
    get_otp(): string {
        return this.otp
    }

    get_payload() {
        return this
    }

    get_action() {
        return this.action
    }

    get_createdAt(): string {
        return this.created_at
    }
    get_updatedAt(): string {
        return this.updated_at
    }


    remove_id(): UserModel {
        delete this.id
        return this
    }

    removeName(): UserModel {
        delete this.name
        return this
    }
    removeEmail(): UserModel {
        delete this.email
        return this
    }
    removePassword(): UserModel {
        delete this.password
        return this
    }
    removeSecretKey(): UserModel {
        delete this.secret_key
        return this
    }
    removeOtpauthUrl(): UserModel {
        delete this.otpauth_url
        return this
    }
    removeOtpVerifiedAt(): UserModel {
        delete this.otp_verified_at
        return this
    }

    removeVerifyToken(): UserModel {
        delete this.verify_token
        return this
    }
    removeOtp(): UserModel {
        delete this.otp
        return this
    }

    removeCreatedAt(): UserModel {
        delete this.created_at
        return this
    }
    removeUpdatedAt(): UserModel {
        delete this.updated_at
        return this
    }

    validateLogin(user: UserModel): boolean {
        if (
            user.get_email() == null || user.get_email() == "" ||
            user.get_password() == null || user.get_password() == ""

        ) {
            return false

        }
        return true
    }

    validateVToken(user: UserModel): boolean {
        if (
            user.get_verify_token() == null || user.get_verify_token() == ""
        ) {
            return false
        }
        return true
    }
    validateVerifyOtp(user: UserModel): boolean {
        if (
            user.get_verify_token() == null || user.get_verify_token() == "" ||
            user.get_otp() == null || user.get_otp() == ""
        ) {
            return false
        }
        return true
    }
    validateFreeze(user: UserModel): boolean {
        if (user.get_id() == null || user.get_status() == null) {
            return false
        }
        return true
    }

    validateCreate(user: UserModel): boolean {
        if (user.get_name() == null || user.get_email() == null || user.get_password() == null || user.get_role().get_id() == null) {
            return false
        }
        return true
    }

    validateEdit(user: UserModel): boolean {
        console.log(user)
        if (user.get_id() == null) {
            console.log('failed id')
            return false
        } else if ((user.get_name() == null && user.get_email() == null && user.get_password() == null && user.get_role().get_id() == null)) {
            console.log('failed data')
            return false
        }
        return true
    }
    validateId(user: UserModel): boolean {
        if (user.get_id() == null) {
            return false
        }
        return true
    }
    validateResetPassword(user: UserModel): boolean {
        if (user.get_id() == null || user.get_password() == null) {
            return false
        }
        return true
    }

    static instanse: UserModel;

    public static get instance(): UserModel {
        if (!UserModel.instance) {
            UserModel.instanse = new UserModel();
        }
        return UserModel.instance;
    }

}


export default UserModel