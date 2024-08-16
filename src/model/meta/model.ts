import { RowDataPacket } from 'mysql2';
import db from '../../database/database'
import KeyVal from '../keyval.model';
import moment from 'moment';
import d from 'mysql2'
import Log from '../log';
import BaseSystemLog from './base_system_log';
import PaginationModel from '../pagination.model';
import { join } from 'path';


export default class Model {
    table_name: string | any;
    protected columns: string[]
    public values: Array<KeyVal> | any = []
    // remove
    remove_table_name(): Model { delete this.table_name; return this }
    remove_values(): Model { delete this.values; return this }
    remove_wheres(): Model { delete this.wheres; return this }
    remove_selects(): Model { delete this.selects; return this }
    //
    constructor(table_name: string) { this.table_name = table_name }
    set_columns(columns: string[]) { this.columns = columns }
    // 
    private wheres: Array<String> | any = []
    private wheres_query: String = ""
    private selects: Array<String> | any = []
    private limit: string | any = ""
    private offset: string | any = ""
    private order: Array<string> | any = []
    private pagination: PaginationModel;
    private properties: Array<string> | any = []
    private likes: string | any = ""

    public add_values(keyval: KeyVal) {
        if (keyval.getValue() === null) return
        else this.values.push(keyval)
    }

    // ===== query util =====
    set_pagination(pagination: PaginationModel): Model {

        this.pagination = pagination
        return this
    }

    set_properties(properties: Array<string>): Model {
        // console.log(this.properties);
        this.properties = properties
        // console.log(this.properties);
        return this
    }

    set_limit(num: number): Model {
        this.limit = num
        return this
    }

    get_pagination() {
        for (var i = 0; i < this.properties.length; i++) {
            this.likes += ` ${this.properties[i]} LIKE ${this.pagination.get_search()}`
        }
        this.likes += ` `
        return this
    }

    add_where(key: string, operation: string, value: string): Model {
        this.wheres.push(`${key} ${operation} ${d.escape(value)}`)
        return this
    }
    add_select(data: Array<string> = []): Model {
        this.selects = data.join(" , ")
        return this
    }
    // add_limit(limit: number|any = null): Model {
    //     this.limit = limit
    //     return this
    // }

    // add_offset(offset: number|any = null): Model {
    //     this.offset = offset
    //     return this
    // }
    // add_order_by(order_by: string = "", order: string = ""): Model {
    //     this.order[0] = order_by
    //     this.order[1] = order
    //     return this
    // }

    // ===== crud =====


    a = `
    SELECT selects 
    FROM table_name 
    WHERE where_query
        AND where_query
        
    column1 LIKE %search%
    column2 LIKE %search%
    
    ORDER BY columns ASC
        
    LIMIT limit
    OFFSET offset
    `


    async index(select: Array<String> = []): Promise<Model | any> {
        var temp;
        this.where_to_query()
        console.log(this.selects)

        const query = `SELECT ${this.selects.length == 0 ? "*" : this.selects} FROM ${this.table_name} ${this.order == "" ? "" : " ORDER BY " + d.escape(this.order[0]) + " " + this.order[1]} ${this.limit == 0 ? "" : "LIMIT " + this.limit} ${this.offset == 0 ? "" : "OFFSET " + this.offset};`

        console.log(query)
        await (await db).query<RowDataPacket[][]>(query).then(([d, q]) => {
            temp = d;
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
        this.where_to_query()
        const query = `SELECT ${this.selects.length == 0 ? "*" : this.selects} FROM ${this.table_name}
        ${this.wheres_query};`
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
        this.where_to_query()
        const data = this.format_update(this.values)
        const query = `UPDATE ${this.table_name} SET ${data} 
            ${this.wheres_query};`

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
            // await new Log().store_system_log(system_log)
            result = e
        })
    }


    async count(select: Array<String> = []): Promise<Model | any> {
        var temp;
        const query = `SELECT count(*) FROM ${this.table_name} ${this.wheres.length == 0 ? "" : "WHERE " + this.where_to_query()} ${this.order == "" ? "" : " ORDER BY " + d.escape(this.order[0]) + " " + this.order[1]} ${this.limit == 0 ? "" : "LIMIT " + this.limit} ${this.offset == 0 ? "" : "OFFSET " + this.offset};`
        await (await db).query<RowDataPacket[][]>(query).then(([d, q]) => {
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

    where_to_query() {
        this.wheres_query = "WHERE "
        if (this.wheres.length > 0) {
            this.wheres_query += this.wheres.join(" AND ")
        }
        if (this.pagination != undefined && this.pagination.get_search() != undefined) {
            if (this.wheres.length == 0) {
                this.wheres_query = "WHERE "
            } else {
                this.wheres_query += " AND "
            }
            for (var i = 0; i < this.properties.length; i++) {
                var or = this.properties.length - 1 == i ? "" : " OR "
                console.log([
                    this.properties.length - 1,
                    i, or
                ])
                const aa = this.properties[i] + " LIKE '%" + this.pagination.get_search() + "%'" + or
                console.log(aa);

                this.wheres_query += aa
            }
        }
        if (this.wheres.length == 0 && (this.pagination != undefined && this.pagination.get_search() == undefined)) {
            this.wheres_query = ""
        }

        console.log(this.wheres);
        console.log(this.wheres_query);

    }
}
