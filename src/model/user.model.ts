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

    setId(id: string): UserModel {
        this.id = id
        return this
    }

    setName(name: string): UserModel {
        this.name = name;
        this.v.push(d.escape(name))
        this.values = this.v
        return this
    }

    setEmail(email: any): UserModel {
        this.email = email;
        this.v.push(d.escape(email))
        this.values = this.v
        return this
    }

    setPassword(password: string): UserModel {
        this.password = password;
        this.v.push(d.escape(password))
        this.values = this.v
        return this
    }

    setRole(role: RoleModel): UserModel {
        this.role = role;
        this.v.push(d.escape(role.get_id()))
        this.values = this.v
        return this
    }
    
    setStatus(status: StatusModel): UserModel {
        this.status = status
        this.v.push(d.escape(status.get_id()))
        this.values = this.v
        return this
    }

    setSecretKey(secret_key: string): UserModel {
        this.secret_key = secret_key;
        this.v.push(d.escape(secret_key))
        this.values = this.v
        return this
    }
    setOtpauthUrl(otpauth_url: string): UserModel {
        this.otpauth_url = otpauth_url;
        this.v.push(d.escape(otpauth_url))
        this.values = this.v
        return this
    }

    setVerifyToken(verify_token: string): UserModel {
        this.verify_token = verify_token;
        this.v.push(d.escape(verify_token))
        this.values = this.v
        return this
    }
    setOtp(otp: string): UserModel {
        this.otp = otp
        return this
    }

    setJwtToken(jwt_token: object) {
        this.jwt_token = jwt_token
        return this
    }

    setAction(action: Action): UserModel {
        this.action = action
        return this
    }

    setOtpVerifiedAt(): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.otp_verified_at = date;
        this.v.push(d.escape(date))
        this.values = this.v
        return this
    }
    setEmailVerifiedAt(): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.email_verified_at = date;
        this.v.push(d.escape(date))
        this.values = this.v
        return this
    }

    public set_created_at(): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.created_at = date
        this.v.push(d.escape((date)))
        this.values = this.v
        return this
    }
    public set_updated_at(): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.updated_at = date
        this.v.push((d.escape(date)))
        this.values = this.v
        return this
    }

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }
    getEmail(): string {
        return this.email
    }
    getPassword(): string {
        return this.password
    }
    getRole(): RoleModel {
        return this.role
    }
    getStatus(): StatusModel {
        return this.status
    }
    getSecretKey(): string {
        return this.secret_key
    }
    getOtpauthUrl(): string {
        return this.otpauth_url
    }
    getOtpVerifiedAt(): string {
        return this.otp_verified_at
    }

    getJwtToken(): object {
        return this.jwt_token
    }
    getVerifyToken(): string {
        return this.verify_token
    }
    getOtp(): string {
        return this.otp
    }

    getPayload() {
        return this
    }

    getAction() {
        return this.action
    }

    getCreatedAt(): string {
        return this.created_at
    }
    getUpdatedAt(): string {
        return this.updated_at
    }


    removeId(): UserModel {
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
            user.getEmail() == null || user.getEmail() == "" ||
            user.getPassword() == null || user.getPassword() == ""

        ) {
            return false

        }
        return true
    }

    validateVToken(user: UserModel): boolean {
        if (
            user.getVerifyToken() == null || user.getVerifyToken() == ""
        ) {
            return false
        }
        return true
    }
    validateVerifyOtp(user: UserModel): boolean {
        if (
            user.getVerifyToken() == null || user.getVerifyToken() == "" ||
            user.getOtp() == null || user.getOtp() == ""
        ) {
            return false
        }
        return true
    }
    validateFreeze(user: UserModel): boolean {
        if (user.getId() == null || user.getStatus() == null) {
            return false
        }
        return true
    }

    validateCreate(user: UserModel): boolean {
        if (user.getName() == null || user.getEmail() == null || user.getPassword() == null || user.getRole().get_id() == null) {
            return false
        }
        return true
    }

    validateEdit(user: UserModel): boolean {
        console.log(user)
        if (user.getId() == null) {
            console.log('failed id')
            return false
        } else if ((user.getName() == null && user.getEmail() == null && user.getPassword() == null && user.getRole().get_id() == null)) {
            console.log('failed data')
            return false
        }
        return true
    }
    validateId(user: UserModel): boolean {
        if (user.getId() == null) {
            return false
        }
        return true
    }
    validateResetPassword(user: UserModel): boolean {
        if (user.getId() == null || user.getPassword() == null) {
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