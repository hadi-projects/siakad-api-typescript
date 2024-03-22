import { Response } from "express";


class InfoResponse {

    static progress(res: Response):Response {
        return res.json({
            code: 3001,
            status: "info",
            message: "not implemented yet",
        })
    }

    static ping(res: Response) {
        return res.json({
            code: 3002,
            status: "info",
            message: "pong"
        })
    }

    static dataEmpty(res: Response, token: string) {
        return res.json({
            code: 3003,
            status: "info",
            message: "Data Empty",
            token: token
        })
    }

    static accountFreezed(res: Response, token: string) {
        return res.json({
            code: 3003,
            status: "info",
            message: "Account is freezed",
            token: token
        })
    }
}

export default InfoResponse