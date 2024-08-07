import RoleHasPermissionModel from '../../model/rolehaspermission.model'
import Seeder from '../meta/seeder'

export default class RoleHasPermissionSeeder {
    async seed() {
        await new Seeder('role_has_permissions', [
            //
            new RoleHasPermissionModel()
                .set_role_id('1')
                .set_resource_id('1')
                .set_permission_id("10")
                .set_created_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("1")
                .set_permission_id("11")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("2")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("3")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("3")
                .set_permission_id("8")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("3")
                .set_permission_id("9")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("4")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("5")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("6")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("7")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 8
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("8")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 9
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("9")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 10
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("10")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 11
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("11")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 12
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("12")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 13
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("13")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 14
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("14")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 15
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("15")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 16
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("16")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 17
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("17")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // 18
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("1")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("2")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("3")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("4")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("5")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("6")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("1")
                .set_resource_id("18")
                .set_permission_id("7")
                .set_created_at()
                .set_updated_at(),
            // -- auth
            new RoleHasPermissionModel()
                .set_role_id("5")
                .set_resource_id("1")
                .set_permission_id("10")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("5")
                .set_resource_id("1")
                .set_permission_id("11")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("5")
                .set_resource_id("3")
                .set_permission_id("8")
                .set_created_at()
                .set_updated_at(),
            new RoleHasPermissionModel()
                .set_role_id("5")
                .set_resource_id("3")
                .set_permission_id("9")
                .set_created_at()
                .set_updated_at(),
            //
            new RoleHasPermissionModel()
                .set_role_id("5")
                .set_resource_id("1")
                .set_permission_id("12")
                .set_created_at()
                .set_updated_at(),
        ]).seed()
    }
}