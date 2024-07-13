import { createClient } from "redis";

export default  createClient()
.on('error', err => console.log('Redis Client Error', err))
.connect();