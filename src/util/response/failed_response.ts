import { Response } from "express";


class FailedResponse {

static loginFailed(res: Response) {
    return res.json({
        code: 1002,
        status: "failed",
        message: "login information not valid"
    })
}

static createFailed(res: Response, token:string) {
    return res.json({
        code: 1003,
        status: "failed",
        message: "create data failed",
        token: token
    })
}

static tokenFailed(res: Response) {
    return res.json({
        code: 1004,
        status: "failed",
        message: "token failed"
    })
}

static jwtFailed(res: Response) {
    return res.json({
        code: 1005,
        status: "failed",
        message: "jwt auth failed"
    })
}

static queryFailed(res: Response, token:string) {
    return res.json({
        code: 1006,
        status: "failed",
        message: "query failed",
        token:token
    })
}

static _2faFailed(res: Response, token:string) {
    return res.json({
        code: 1007,
        status: "failed",
        message: "2fa failed",
        token: token
    })

}
static paramRequestFailed(res: Response, token:string) {
    return res.json({
        code: 1008,
        status: "failed",
        message: "params request failed",
        token:token
    })
}

static viewUserFailed(res: Response, token:string) {
    return res.json({
        code: 1009,
        status: "failed",
        message: "view user failed",
        token:token
    })
}

static viewIndexFailed(res: Response, token:string) {
    return res.json({
        code: 1010,
        status: "failed",
        message: "view index failed",
        token:token
    })
}

static deleteFailed(res: Response, token:string) {
    return res.json({
        code: 1011,
        status: "failed",
        message: "delete data failed",
        token: token
    })
}

static resetFailed(res: Response, token:string) {
    return res.json({
        code: 1012,
        status: "failed",
        message: "User status is not active",
        token: token
        
    })
}

static freezeFailed(res: Response, token:string) {
    return res.json({
        code: 1013,
        status: "failed",
        message: "freeze failed",
        token: token
    })
}

static unFreezeFailed(res: Response, token:string) {
    return res.json({
        code: 1014,
        status: "failed",
        message: "Un-Freeze failed",
        token: token
    })
}

static editFailed(res: Response, token:string) {
    return res.json({
        code: 1014,
        status: "failed",
        message: "edit data failed",
        token: token
    })
}
static sendEmailfailed(res: Response, token:string) {
    return res.json({
        code: 1015,
        status: "failed",
        message: "send email failed",
        token: token
    })
}
static verifyEmailFailed(res: Response, token:string) {
    return res.json({
        code: 1016,
        status: "failed",
        message: "verify email failed, verify token expired",
        token: token
    })
}

static userFreezed(res: Response, token:string) {
    return res.json({
        code: 1017,
        status: "failed",
        message: "user status is freezed",
        token: token
    })
}
static jwtExpired(res: Response, token:string) {
    return res.json({
        code: 1018,
        status: "failed",
        message: "Jwt token expired",
        token: token
    })
}
static dataDuplicate(res: Response, token:string) {
    return res.json({
        code: 1018,
        status: "failed",
        message: "Data Duplicate",
        token: token
    })
}
static failedPermission(res: Response, token:string) {
    return res.json({
        code: 1019,
        status: "failed",
        message: "Permission failed",
        token: token
    })
}
static statusFailed(res: Response, token:string) {
    return res.json({
        code: 1019,
        status: "failed",
        message: "User already activated",
        token: token
    })
}
static vTokenFailed(res: Response) {
    return res.json({
        code: 1019,
        status: "failed",
        message: "Verify token failed",
    })
}
static logicFailed(res: Response, token:string) {
    return res.json({
        code: 1019,
        status: "failed",
        message: "logic failed",
        token:token
    })
}

static keyvalFailed(res: Response, token:string) {
    return res.json({
        code: 1020,
        status: "failed",
        message: "keyval failed",
        token:token
    })
}

static userNotActive(res: Response) {
    return res.json({
        code: 1020,
        status: "failed",
        message: "user is not active",
    })
}

static otpFailed(res: Response) {
    return res.json({
        code: 1020,
        status: "failed",
        message: "otp code not valid",
    })
}
}

export default FailedResponse