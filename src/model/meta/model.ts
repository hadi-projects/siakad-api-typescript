import { RowDataPacket } from 'mysql2';
import db from '../../database/database'
import KeyVal from '../keyval.model';
import moment from 'moment';
import d from 'mysql2'
import Logger from '../../service/logger';


export default class Model {
    table_name: string | any;
    protected columns: string[]
    public values: Array<KeyVal> | any = []
    // remove
    remove_table_name(): Model { delete this.table_name; return this }
    remove_values(): Model { delete this.values; return this }
    //
    constructor(table_name: string) { this.table_name = table_name }
    set_columns(columns: string[]) { this.columns = columns }

    public add_values(keyval: KeyVal) {
        if (keyval.getValue() === null) return
        else this.values.push(keyval)
    }

    // ===== crud =====

    async create():Promise<Object> {
        const data = this.format_insert(this.values)
        var result = {}

        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (${[data[0]]}) VALUES (${[data[1]]});
        `).then((d) =>
            {
                console.log('done inserting data: ' + JSON.stringify(d[0]))
                result = d['0']
            }
        ).catch((e) => 
            {
                console.log('error inserting data: ' + JSON.stringify(e))
                // new Logger().errorLogger.
                result = e
            }
        )
        return result

    }


    async show(select: Array<String> = []): Promise<Model | any> {
        var temp;
        await (await db).query<RowDataPacket[]>(
            `SELECT ${select.length == 0 ? "*" : select} FROM ${this.table_name}
            WHERE ${this.values[0].getKey()} = ${this.values[0].getValue()};`
        ).then(([d, q]) => {
            temp = d[0];
        }).catch((e) => {
            temp = Error(e);
        })
        return temp;
    }




    async update(): Promise<Model | any> {
        const data = this.format_update(this.values)
        await (await db).query<RowDataPacket[]>(`
            UPDATE ${this.table_name} SET ${data} WHERE 
            ${this.values[0].getKey()} = ${this.values[0].getValue()};
        `).then((e) => console.log('done: ' + e)).catch((e) => console.log('error: ' + e))
    }





    // ===== getter setter =====
    private created_at: string
    private updated_at: string



    public set_created_at(dt: string = ""): Model {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.created_at = dt == "" ? date : dt
        this.add_values(new KeyVal().setKey('created_at').setValue(d.escape(this.created_at)))
        return this
    }

    public get_created_at(): string {
        return this.created_at
    }

    public set_updated_at(dt: string = ""): Model {
        const date = moment().format().replace("T", " ").split("+")[0]
        this.updated_at = dt == "" ? date : dt
        this.add_values(new KeyVal().setKey('updated_at').setValue(d.escape(this.created_at)))
        return this
    }

    public get_updated_at(): string {
        return this.updated_at
    }


    // ===== validation =====

    public validate_empty(data: Array<string>): boolean {
        for (var i = 0; i < data.length; i++) {
            if (data[i] == null || data[i].trim() == "") return false
        }
        return true
    }

    // ===== util =====

    format_insert(values: KeyVal[]): Array<Array<String>> {
        const temp_column = []
        const temp_value = []
        for (var i = 0; i < values.length; i++) {
            if(this.values[i].getValue().includes('values')) {
                continue
            }else {
                temp_column.push(this.values[i].getKey())
                temp_value.push(this.values[i].getValue())
            }
        }
        return [temp_column, temp_value]

    }

    format_update(values: KeyVal[]): string {
        var temp = ""
        for (var i = 0; i < values.length; i++) {
            var a = `${values[i].getKey()} = ${values[i].getValue()}, `
            if (i == values.length - 1) a = a.replace(",", "")
            temp += a
        }
        return temp

    }

}
