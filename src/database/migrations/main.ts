import { RowDataPacket } from "mysql2"
import KeyVal from "../../model/keyval.model"
import db from '../database'
import MigrationsModel from "../../model/migration.model"
import Logger from "../../service/logger"


export default class Migration {

    private table_name:string = ''
    set_table_name(table_name:string):Migration{
        this.table_name = table_name
        return this
    }
    get_table_name():string{
        return this.table_name
    }

    constructor(){
        this.table_name
    }
    
    create_table_format(raw: Array<KeyVal>):string{
        var temp:Array<String>=[]
        for(var i=0;i<raw.length;i++){
            temp.push(raw[i].getKey() + " " + raw[i].getValue().join(" ").replace(" ,",","))
        }
        return temp.join(" ")
    }
    
    async drop_db(){
        await (await db).query("DROP DATABASE " + process.env["DB_DATABASE"])
    }

    async create_db(){
        await (await db).query("CREATE DATABASE " + process.env["DB_DATABASE"])
    }

    async use_db(){
        await (await db).query("USE " + process.env["DB_DATABASE"])
    }

    async create_table(columns:KeyVal[]){
        await (await db).query(`DROP TABLE IF EXISTS ${this.table_name}`);
        await (await db).query<RowDataPacket[]>(`
            CREATE TABLE ${this.table_name} ( ${this.create_table_format(columns)} );`)
            .then(async () => {
                await new MigrationsModel().set_name(this.table_name)
                .set_created_at().create()
                console.log(this.table_name + ' table migration success ✅')
            })
            .catch((e) => {
                console.log(this.table_name + ' table migration failed ❌: ' + e.message)
                new Logger().errorLogger().error({ message: e.message, system: "mysql" })
                process.exit(0)
            })
        }        
    }