import express from 'express'


export default class ApiKeyMiddleware {
    check(req:express.Request, res:express.Response){
        
        if(req.url.includes('/ping')) return true

        if(!req.headers["x-api-key"]) return false
        else true
    }
}