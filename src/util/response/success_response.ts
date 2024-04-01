import { Response } from "express";
import UserModel from "../../model/user.model";


class SuccessReponse {

    static login(res: Response, user:UserModel) {
        return res.json({
            code: 2000,
            status: "success",
            message: "login success",
            data: user
        })
    }
    static generate2fa(res: Response, user:UserModel) {
        return res.json({
            code: 2000,
            status: "success",
            message: "generate 2fa success",
            data: user
        })
    }
}

export default SuccessReponse