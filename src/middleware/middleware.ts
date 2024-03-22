import FailedResponse from "../util/response/failed_response";
import { AccessLogMiddleware } from "./access_log.middleware";
import ApiKeyMiddleware from "./api_key.middleware"
import express, {Express} from 'express';

export default class Middleware {
    check(req:express.Request, res:express.Response, next:express.NextFunction){
        const api_key = new ApiKeyMiddleware()
        const access_log = new AccessLogMiddleware()

        api_key.check(req, res, next)
        access_log.log(req, res, next)
    }
}