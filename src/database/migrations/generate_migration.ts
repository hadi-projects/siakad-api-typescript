const fs = require('fs');
const path = require('path');

const args = process.argv; // Get arguments from command line

// Your code to generate TypeScript file based on arguments
const class_name = args.splice(2)
const file_name = `${Date.now()}-${class_name}.ts`
const content = `
import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Table from './tabel';

class ${class_name} {
    async migrate() {
        await new Table('${class_name.toString().toLowerCase()}', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            // add more table here
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}
`

const outputFilePath = path.resolve(__dirname, file_name); // Replace <output-filename> with the desired filename
fs.writeFileSync(outputFilePath, content);
