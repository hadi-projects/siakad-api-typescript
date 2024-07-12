import UserTable from "./01.user.migration"
import RoleTable from "./02.role.migration"
import StatusTable from "./03.status.migration"
import RoleHasPermissionTable  from "./04.rolehaspermission.migration"
import ResourceTable from "./05.resources.migration"
import PermissionTable from "./06.permission.migration"
import AccessLogTable from "./07.access_log.migration"
import SystemLogTable from "./08.system_log.migration"
import ForeignTable from "./foreignkey.migration"
import Migrations from "./00.migrations"
import Migration from "../meta/main"


async function main(){
    
    await new Migration().drop_db()
    await new Migration().create_db()
    await new Migration().use_db()

    await new Migrations().migrate()
    await new UserTable().migrate()
    await new RoleTable().migrate()
    await new StatusTable().migrate()
    await new RoleHasPermissionTable().migrate()
    await new ResourceTable().migrate()
    await new PermissionTable().migrate()
    await new AccessLogTable().migrate()
    await new SystemLogTable().migrate()
    await ForeignTable.migrate()
    
    process.exit(0)
}

main()

