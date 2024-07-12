const fs = require('fs');
const path = require('path');

const class_name = process.argv.splice(2)
const file_name = `${Date.now()}-${class_name}.ts`
const content = `
import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Table from './tabel';

class ${class_name} {
    async migrate() {
        await new Table('${class_name.toString().toLowerCase()}s', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            // add more table here
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}
`

const outputFilePath = path.resolve(__dirname, file_name); 
fs.writeFileSync(outputFilePath, content);
