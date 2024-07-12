// const fs = require('fs');
// const path = require('path');
// const app_root_path = require('app-root-path')

// let class_name = process.argv.splice(2)
// let file_name = `${Date.now()}-${class_name}.migration.ts`
// let content = 

// `
// import Type from '../meta/datatype';
// import KeyVal from '../../model/keyval.model';
// import Table from '../meta/tabel';

// export default class ${class_name} {
//     async migrate() {
//         await new Table('${class_name.toString().toLowerCase()}s', [
//             new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
//             // add more table here
//             new KeyVal().setKey('updated_at').setValue([Type.datetime])
//         ]).migrate()
//     }
// }
// `

// let outputFilePath = path.resolve(app_root_path+"/src/database/migrations", file_name); 
// fs.writeFileSync(outputFilePath, content);

import fs from 'fs';
import path from 'path';
import app_root_path from 'app-root-path'


class GenerateMigration {

    run() {
        const class_name = process.argv.splice(2)
        const file_name = `${Date.now()}-${class_name}.migration.ts`
        const outputFilePath = path.resolve(app_root_path + "/src/database/migrations", file_name);
        const content =
`import Type from '../meta/datatype';
import KeyVal from '../../model/keyval.model';
import Table from '../meta/tabel';

export default class ${class_name} {
    async migrate() {
        await new Table('${class_name.toString().toLowerCase()}s', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            // add more table here
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}`
        fs.writeFileSync(outputFilePath, content);
    }
}

new GenerateMigration().run()