import express from 'express'

export default class BodyParserMiddleware {
    parse(req:express.Request, res:express.Response, next:express.NextFunction){
        const app = express()
        next()
    }
}