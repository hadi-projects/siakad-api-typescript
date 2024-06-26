import ResourceSeeder from "./resource.seeder";
import RoleSeeder from "./role.seeder";
import UserSeeder from "./user.seeder";
import RoleHasPermissionSeeder from "./rolehaspermission.seeder";
import StatusSeeder from "./status.seeder";
import PermissionSeeder from "./permission.seeder";


async function seed(){
    await RoleSeeder.seed()
    await StatusSeeder.seed()
    await ResourceSeeder.seed()
    await UserSeeder.seed()
    await PermissionSeeder.seed()
    await RoleHasPermissionSeeder.seed()
    process.exit()
}
seed()