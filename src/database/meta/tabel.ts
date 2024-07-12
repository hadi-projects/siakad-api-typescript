import KeyVal from "../../model/keyval.model";
import Migration from "./main";

export default class Table {
    columns: Array<KeyVal> = []
    table_name: string = ''

    constructor(table_name:string, columns: Array<KeyVal>) {
        this.columns = columns
        this.table_name = table_name
    }
    async migrate(){
        await new Migration().set_table_name(this.table_name).create_table(this.columns)
    }
}