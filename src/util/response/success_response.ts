import { Response } from "express";
import UserModel from "../../model/user.model";
import JwtModel from "../../model/jwt.model";


class SuccessReponse {

    static login(res: Response, user:UserModel) {
        return res.json({
            code: 2000,
            status: "success",
            message: "login success",
            data: user,
        })
    }
    static generate2fa(res: Response, user:UserModel) {
        return res.json({
            code: 2000,
            status: "success",
            message: "generate success",
            data: user
        })
    }
    
    static verifyOtpSuccess(res: Response, jwt:JwtModel) {
        return res.json({
            code: 2000,
            status: "success",
            message: "verify otp success",
            jwt: jwt
        })
    }
    
    static createDataSuccess(res: Response, jwt_model: JwtModel) {
        return res.json({
            code: 2001,
            status: "success",
            message: "create data success",
            jwt: jwt_model
        })
    }
    static getDataSuccess(res: Response, data:any, jwt_model: JwtModel) {
        return res.json({
            code: 2002,
            status: "success",
            message: "create data success",
            jwt: jwt_model,
            data: data,
            pagination:{
                // limit:
            }
        })
    }
   
    static deleteDataSuccess(res: Response, jwt_model: JwtModel) {
        return res.json({
            code: 2003,
            status: "success",
            message: "delete data success",
            jwt: jwt_model,
        })
    }
    static editDataSuccess(res: Response, jwt_model: JwtModel) {
        return res.json({
            code: 2004,
            status: "success",
            message: "edit data success",
            jwt: jwt_model,
        })
    
    }
    static resetSuccess(res: Response, jwt_model: JwtModel) {
        return res.json({
            code: 2004,
            status: "success",
            message: "reset data success",
            jwt: jwt_model,
        })
    
    }
}

export default SuccessReponse