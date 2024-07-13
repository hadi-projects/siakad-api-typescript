import express from 'express'


export default class ApiKeyMiddleware {
    public check(req:express.Request):boolean{
        
        // something wrong return false
        if(req.url.includes('/ping')) return true

        if(!req.headers["x-api-key"]) return false
        
        if(req.headers["x-api-key"]!=process.env["API_KEY"]) return false
        return true
    }
}