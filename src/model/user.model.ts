import moment from "moment"
import UserTable from "../database/migrations/01.user.migration"
import Action from "../enum/action.enum"
import Model from "./meta/model"
import RoleModel from "./role.model"
import StatusModel from "./status.model"
import d from 'mysql2'
import KeyVal from "./keyval.model"

class UserModel extends Model {
    private id: string
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


    constructor() { super('users') }

     public set_id(id: string): UserModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }

    public get_id(): string {
        return this.id;
    }


    set_name(name: string): UserModel {
        this.name = name
        this.add_values(new KeyVal().setKey('name').setValue(d.escape(name)))
        return this
    }
    get_name(): string {
        return this.name
    }
    
    
    
    set_email(email: any): UserModel {
        this.email = email
        this.add_values(new KeyVal().setKey('email').setValue(d.escape(email)))
        return this
    }
    get_email(): string {
        return this.email
    }
    
    
    
    set_password(password: string): UserModel {
        this.password = password
        this.add_values(new KeyVal().setKey('password').setValue(d.escape(password)))
        return this
    }
    get_password(): string {
        return this.password
    }


    set_role(role: RoleModel): UserModel {
        this.role = role
        this.add_values(new KeyVal().setKey('role_id').setValue(d.escape(role.get_id())))
        return this
    }
    get_role(): RoleModel {
        return this.role
    }
    
    
    set_status(status: StatusModel): UserModel {
        this.status = status
        this.add_values(new KeyVal().setKey('status_id').setValue(d.escape(status.get_id())))
        return this
    }
    get_status(): StatusModel {
        return this.status
    }
    
    
    set_secret_key(secret_key: string): UserModel {
        this.secret_key = secret_key
        this.add_values(new KeyVal().setKey('secret_key').setValue(d.escape(secret_key)))
        return this
    }
    get_secret_key(): string {
        return this.secret_key
    }
    
    
    set_otpauth_url(otpauth_url: string): UserModel {
        this.otpauth_url = otpauth_url
        this.add_values(new KeyVal().setKey('otpauth_url').setValue(d.escape(otpauth_url)))
        return this
    }
    get_otpauth_url(): string {
        return this.otpauth_url
    }
    
    
    set_verify_token(verify_token: string): UserModel {
        this.verify_token = verify_token
        this.add_values(new KeyVal().setKey('verify_token').setValue(d.escape(verify_token)))
        return this
    }
    get_verify_token(): string {
        return this.verify_token
    }
    
    
    set_otp(otp: string): UserModel {
        this.otp = otp
        this.add_values(new KeyVal().setKey('otp').setValue(d.escape(otp)))
        return this
    }
    get_otp(): string {
        return this.otp
    }
    
    
    set_jwt_token(jwt_token: object) {
        this.jwt_token = jwt_token
        this.add_values(new KeyVal().setKey('jwt_token').setValue(d.escape(jwt_token)))
        return this
    }
    get_jwt_token(): object {
        return this.jwt_token
    }
    
    
    set_action(action: Action): UserModel {
        this.action = action
        this.add_values(new KeyVal().setKey('action').setValue(d.escape(action)))
        return this
    }
    get_action() {
        return this.action
    }
    
    
    
    set_otp_verified_at(dt:string=""): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.otp_verified_at = dt == "" ? date : null;
        this.add_values(new KeyVal().setKey('otp_verified_at').setValue(d.escape(this.otp_verified_at)))
        return this
    }
    get_otp_verified_at(): string {
        return this.otp_verified_at
    }
    
    
    set_email_verified_at(dt:string=""): UserModel {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.email_verified_at = dt == "" ? date : null;
        this.add_values(new KeyVal().setKey('email_verified_at').setValue(d.escape(this.otp_verified_at)))
        return this
    }
    get_email_verified_at(): string {
        return this.email_verified_at
    }

    // ====== validation ======

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
    // validateFreeze(user: UserModel): boolean {
    //     if (user.get_id() == null || user.get_status() == null) {
    //         return false
    //     }
    //     return true
    // }

    // validateCreate(user: UserModel): boolean {
    //     if (user.get_name() == null || user.get_email() == null || user.get_password() == null || user.get_role().get_id() == null) {
    //         return false
    //     }
    //     return true
    // }

    // validateEdit(user: UserModel): boolean {
    //     console.log(user)
    //     if (user.get_id() == null) {
    //         console.log('failed id')
    //         return false
    //     } else if ((user.get_name() == null && user.get_email() == null && user.get_password() == null && user.get_role().get_id() == null)) {
    //         console.log('failed data')
    //         return false
    //     }
    //     return true
    // }
    // validateId(user: UserModel): boolean {
    //     if (user.get_id() == null) {
    //         return false
    //     }
    //     return true
    // }
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