
import Type from './datatype';
import KeyVal from '../../model/keyval.model';
import Table from './tabel';

class MakananTable {
    async migrate() {
        await new Table('makanantable', [
            new KeyVal().setKey('id').setValue([Type.int, Type.primary_key, Type.auto_increment, " , "]),
            // add more table here
            new KeyVal().setKey('updated_at').setValue([Type.datetime])
        ]).migrate()
    }
}
