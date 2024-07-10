import Action from "../enum/action.enum"
import RoleModel from "./role.model"
import StatusModel from "./status.model"

class UserModel {
    private id!: string
    private name!: string
    private email!: string
    private password!: string
    private role!: RoleModel
    private status!: StatusModel
    private secret_key!: string
    private otpauth_url!: string
    private verify_token!: string
    private otp_verified_at!: string
    private otp!: string
    private action:Action
    private jwt_token:object
    private created_at:string
    private updated_at:string


    setId(id: string):UserModel {
        this.id = id
        return this
    }

    setName(name: string):UserModel {
        this.name = name
        return this
    }
    
    setEmail(email: string):UserModel  {
        this.email = email
        return this
    }
    
    setPassword(password: string):UserModel {
        this.password = password
        return this
    }
    
    setRole(role: RoleModel):UserModel {
        this.role = role
        return this
    }
    
    setStatus(status: StatusModel):UserModel {
        this.status = status
        return this
    }
    
    setSecretKey(secret_key: string):UserModel {
        this.secret_key = secret_key
        return this
    }
    setOtpauthUrl(otpauth_url: string):UserModel {
        this.otpauth_url = otpauth_url
        return this
    }
    
    setVerifyToken(verify_token: string):UserModel {
        this.verify_token = verify_token
        return this
    }
    setOtp(otp: string):UserModel {
        this.otp = otp
        return this
    }
    
    setJwtToken(jwt_token: object) {
        this.jwt_token = jwt_token
        return this
    }
    
    setAction(action:Action):UserModel {
        this.action = action 
        return this
    }
    
    setOtpVerifiedAt(otp_verified_at:string):UserModel {
        this.otp_verified_at = otp_verified_at 
        return this
    }
    setCreatedAt(created_at:string):UserModel {
        this.created_at = created_at
        return this
    }
    setUpdatedAt(updated_at:string):UserModel {
        this.updated_at = updated_at
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

    getAction(){
        return this.action
    }

    getCreatedAt():string{
        return this.created_at
    }
    getUpdatedAt():string{
        return this.updated_at
    }

    public static setRoleModel(id:string, name:string){
        const role = new RoleModel()
        role.setId(id)
        role.setName(name)
        return role
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
            user.getVerifyToken() == null || user.getVerifyToken() == ""||
            user.getOtp() == null || user.getOtp() == ""
        ) {
            return false
        }
        return true
    }
    validateFreeze(user: UserModel): boolean {
        if (user.getId() == null || user.getStatus() == null ) {
            return false
        }
        return true
    }

    validateCreate(user:UserModel):boolean{
        if(user.getName() == null || user.getEmail() == null || user.getPassword() == null || user.getRole().getId() == null){
            return false
        }
        return true
    }
    
    validateEdit(user:UserModel):boolean{
        console.log(user)
        if(user.getId() == null){
            console.log('failed id')
            return false
        }else if((user.getName() == null && user.getEmail() == null && user.getPassword() == null && user.getRole().getId() == null)){
            console.log('failed data')
            return false
        }
        return true
    }
    validateId(user:UserModel):boolean{
        if(user.getId() == null){
            return false
        }
        return true
    }
    validateResetPassword(user:UserModel):boolean{
        if(user.getId() == null || user.getPassword() == null){
            return false
        }
        return true
    }

    static instanse:UserModel;
    
    public static get instance(): UserModel {
        if (!UserModel.instance) {
            UserModel.instanse = new UserModel();
        }
        return UserModel.instance;
    }

}


export default UserModel