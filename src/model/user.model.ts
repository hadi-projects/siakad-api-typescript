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
    private otp!: string
    private action:Action
    private created_at:string
    private updated_at:string


    setId(id: string) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setEmail(email: string) {
        this.email = email
    }

    setPassword(password: string) {
        this.password = password
    }

    setRole(role: RoleModel) {
        this.role = role
    }

    setStatus(status: StatusModel) {
        this.status = status
    }

    setSecretKey(secret_key: string) {
        this.secret_key = secret_key
    }
    setOtpauthUrl(otpauth_url: string) {
        this.otpauth_url = otpauth_url
    }

    setVerifyToken(verify_token: string) {
        this.verify_token = verify_token
    }
    setOtp(otp: string) {
        this.otp = otp
    }

    setAction(action:Action){
        this.action = action 
    }
    setCreatedAt(created_at:string){
        this.created_at = created_at
    }
    setUpdatedAt(updated_at:string){
        this.updated_at = updated_at
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
        if(user.getName() == null || user.getEmail() == null || user.getPassword() == null){
            return false
        }
        return true
    }
    
    validateEdit(user:UserModel):boolean{
        if(user.getId() == null || user.getName() == null || user.getRole() == null){
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

}


export default UserModel