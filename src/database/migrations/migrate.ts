import UserTable from "./01.user.migration"
import RoleTable from "./02.role.migration"
import StatusTable from "./03.status.migration"
import RoleHasPermissionTable  from "./04.rolehaspermission.migration"
import { ResourceTable } from "./05.resources.migration"

async function main(){
    await UserTable.migrate()
    await RoleTable.migrate()
    await StatusTable.migrate()
    await RoleHasPermissionTable.migrate()
    await ResourceTable.migrate()
    process.exit(0)
}

main()