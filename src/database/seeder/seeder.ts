import ResourceSeeder from "./resource.seeder";
import RoleSeeder from "./role.seeder";
import UserSeeder from "./user.seeder";
import RoleHasPermissionSeeder from "./rolehaspermission.seeder";
import StatusSeeder from "./status.seeder";
import PermissionSeeder from "./permission.seeder";


async function seed(){
    await new RoleSeeder().seed()
    await new StatusSeeder().seed()
    await new ResourceSeeder().seed()
    await new UserSeeder().seed()
    await new PermissionSeeder().seed()
    await new RoleHasPermissionSeeder().seed()
    process.exit()
}
seed()