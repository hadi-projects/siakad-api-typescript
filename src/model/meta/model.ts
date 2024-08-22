import { RowDataPacket } from 'mysql2';
import db from '../../database/database'
import KeyVal from '../keyval.model';
import moment from 'moment';
import d from 'mysql2'
import Log from '../log';
import BaseSystemLog from './base_system_log';
import PaginationModel from '../pagination.model';


export default class Model {
    table_name: string | any;
    public values: Array<KeyVal> | any = []
    // remove
    remove_table_name(): Model { delete this.table_name; return this }
    remove_values(): Model { delete this.values; return this }
    remove_wheres(): Model { delete this.wheres; return this }
    remove_selects(): Model { delete this.selects; return this }
    //
    constructor(table_name: string) { this.table_name = table_name }
    // 
    private wheres: Array<String> | any = ""
    private query: Array<String> | any = false
    private selects: Array<String> | any = []
    private pagination: PaginationModel;
    private joins: string | any = ""
    private search: string | any = ""


    public add_values(keyval: KeyVal) {
        if (keyval.getValue() === null) return
        else this.values.push(keyval)
    }

    // ===== query util =====
    set_pagination(pagination: PaginationModel): Model {
        this.pagination = pagination
        const search = JSON.parse(JSON.stringify(pagination.get_search()))
        let temp = ""
        console.log(search.text);
        console.log(search.columns);
        if (search.text != "") {
            for (var i = 0; i < search.columns.length; i++) {
                console.log(search.columns[i]);
                if (temp != '') {
                    temp += `OR ${search.columns[i]} LIKE '%${search.text}%' `
                }
                else {
                    temp += ` ${search.columns[i]} LIKE '%${search.text}%' `
                }
            }
            this.search = `${temp == '' ? ' WHERE ' + temp : temp} `
        }else{
            temp  = ""
        }
        return this
    }

    add_where(key: string, operation: string, value: string): Model {
        if (this.wheres != '') {
            this.wheres += `AND ${key} ${operation} ${d.escape(value)} `
        } else {
            this.wheres += `${key} ${operation} ${d.escape(value)} `
        }
        return this
    }
    add_select(data: Array<string> = []): Model {
        this.selects = data.join(" , ")
        return this
    }

    add_join(join: string, base_table: string, column_a: string, operation: string, column_b: string): Model {
        this.joins += `${join} ${base_table} ON ${column_a} ${operation} ${column_b} `
        return this
    }
    // ===== crud =====


    async index(): Promise<Model | any> {
        console.log("====");
        console.log(this.search);
        console.log("====");
        
        var temp;
        this.query = `
        SELECT ${this.selects.length == 0 ? "*" : this.selects} FROM ${this.table_name} 
        ${this.joins} 
        ${this.wheres == "" ? "" : "WHERE " + this.wheres} 
        ${this.search == "" ? "" : "AND (" + this.search + ")"} 
        ${this.pagination.get_order() == "" ? "" : " ORDER BY " + this.pagination.get_order()} 
        ${this.pagination.get_limit() == 0 ? "" : "LIMIT " + this.pagination.get_limit()} 
        ${this.pagination.get_offset() == 0 ? "" : "OFFSET " + this.pagination.get_offset()};`

        console.log(this.query)
        await (await db).query<RowDataPacket[][]>(this.query).then(([d, q]) => {
            temp = d;
            temp = {
                data: d,
                instance: this
            }
        }).catch((e) => {
            console.log(e);
            temp = Error(e);
        })
        return temp;
    }


    async create(): Promise<Object> {
        const data = this.format_insert(this.values)
        var result = {}

        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (${[data[0]]}) VALUES (${[data[1]]});
        `).then(async (d) => {
            result = d['0']
        }
        ).catch(async (e) => {
            const system_log = new BaseSystemLog().set_level('medium')
                .set_services('mysql_update_query')
                .set_system('mysql_nodejs_v2')
                .set_message(JSON.stringify(e.message))
                .set_created_at()
            await new Log().store_system_log(system_log)
            result = e
        }
        )
        return result
    }


    async show(): Promise<Model | any> {
        var temp;
        const query = `SELECT ${this.selects.length == 0 ? "*" : this.selects} FROM ${this.table_name};`
        await (await db).query<RowDataPacket[]>(query)
            .then(([d, q]) => {
                temp = d[0];
            }).catch(async (e) => {
                temp = Error(e);
            })
        return temp;
    }


    async update(): Promise<Model | any> {
        var result = {}
        const data = this.format_update(this.values)
        const query = `UPDATE ${this.table_name} SET ${data}`

        console.log(query)
        await (await db).query<RowDataPacket[]>(query).then(async (d) => {
            console.log('done updating data: ' + JSON.stringify(d[0]))
            result = d['0']
        }
        ).catch(async (e) => {
            const system_log = new BaseSystemLog().set_level('medium')
                .set_services('mysql_update_query')
                .set_system('mysql_nodejs_v2')
                .set_message(JSON.stringify(e.message))
                .set_created_at()
            result = e
        })
    }


    async count(): Promise<Model | any> {
        var temp;
        this.query = `
        SELECT count(*) FROM ${this.table_name} 
        ${this.joins} 
        ${this.wheres == "" ? "" : "WHERE " + this.wheres}
        ${this.search == "" ? "" : "AND (" + this.search + ")"};
        `
        await (await db).query<RowDataPacket[][]>(this.query).then(([d, q]) => {
            temp = d;
        }).catch((e) => {
            console.log(e);
            temp = Error(e);
        })
        return temp;
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
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            if (data[i] == null || data[i].toString().trim() == "") return false
        }
        return true
    }

    // ===== util =====
    format_insert(values: KeyVal[]): Array<Array<String>> {
        const temp_column = []
        const temp_value = []
        for (var i = 0; i < values.length; i++) {
            if (this.values[i].getValue().includes('values')) {
                continue
            } else {
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
