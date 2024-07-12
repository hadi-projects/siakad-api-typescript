import fs from 'fs';
import path from 'path';
import app_root_path from 'app-root-path'

class GenerateSeeder {
    
    run() {
        const class_name = process.argv.splice(2)
        const file_name = `${Date.now()}-${class_name}.seeder.ts`
        const outputFilePath = path.resolve(app_root_path + "/src/database/seeder", file_name);
        const content = 
`import Seeder from '../meta/seeder'

export default class ${class_name} {
    async seed() {
        await new Seeder('${class_name.toString().toLowerCase()}s', [
            //
        ]).seed()
    }
}
        `
        fs.writeFileSync(outputFilePath, content);
    }
}

new GenerateSeeder().run()