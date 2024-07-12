import UserTable from "./01.user.migration"
import RoleTable from "./02.role.migration"
import StatusTable from "./03.status.migration"
import RoleHasPermissionTable  from "./04.rolehaspermission.migration"
import ResourceTable from "./05.resources.migration"
import PermissionTable from "./06.permission.migration"
import AccessLogTable from "./07.access_log.migration"
import SystemLogTable from "./08.system_log.migration"
import ForeignTable from "./foreignkey.migration"
import Migrations from "./migrations"
import db from '../database'
import KeyVal from "../../model/keyval.model"

async function main(){

    
    await drop_db()
    await create_db()
    await use_db()
    await Migrations.migrate()
    // await UserTable.migrate()
    // await RoleTable.migrate()
    // await StatusTable.migrate()
    // await RoleHasPermissionTable.migrate()
    // await ResourceTable.migrate()
    // await PermissionTable.migrate()
    // await ForeignTable.migrate()
    // await AccessLogTable.migrate()
    // await SystemLogTable.migrate()
    process.exit(0)
}

main()

async function drop_db(){
    await (await db).query("DROP DATABASE " + process.env["DB_DATABASE"])
}
async function create_db(){
    await (await db).query("CREATE DATABASE " + process.env["DB_DATABASE"])
}
async function use_db(){
    await (await db).query("USE " + process.env["DB_DATABASE"])
}
export default class Migration{
    static create_table_format(raw: Array<KeyVal>):string{
        var temp:Array<String>=[]
        for(var i=0;i<raw.length;i++){
            temp.push(raw[i].getKey() + " " + raw[i].getValue().join(" ").replace(" ,",","))
        }
        return temp.join(" ")
    }
}