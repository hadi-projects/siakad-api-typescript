import { createClient, RedisClientType, RedisDefaultModules, RedisFunctions, RedisModules, RedisScripts } from 'redis';

export default class RedisService {

    r:RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>

    public async connect():Promise<RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>>{
        this.r =  await createClient()
        .on('error', err => console.log('Redis Client Error', err))
        .on('connection', ()=>console.log('redis connected'))
        .connect();
        return this.r;
    }
}