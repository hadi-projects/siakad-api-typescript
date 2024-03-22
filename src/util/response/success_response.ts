import { Response } from "express";


class SuccessReponse {

    static oauth2_success(res: Response, data:String) {
        return res.json({
            code: 2000,
            status: "success",
            message: "create data success",
            data: data
        })
    }
}

export default SuccessReponse