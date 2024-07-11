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

async function main(){
    await Migrations.migrate()
    await UserTable.migrate()
    await RoleTable.migrate()
    await StatusTable.migrate()
    await RoleHasPermissionTable.migrate()
    await ResourceTable.migrate()
    await PermissionTable.migrate()
    await ForeignTable.migrate()
    await AccessLogTable.migrate()
    await SystemLogTable.migrate()
    process.exit(0)
}

main()