import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'

export default class ResourceSeeder {
    static table_name:string = 'resources'
    static datetime = moment().format().split("+")[0].replace("T", " ")
    
    
    static async seed(){
        await (await db).query<RowDataPacket[]>(`
            INSERT INTO ${this.table_name} (
                name, created_at, updated_at
            ) VALUES 
            ('auth', '${this.datetime}', '${this.datetime}'),
            ('user', '${this.datetime}', '${this.datetime}'),
            ('otp', '${this.datetime}', '${this.datetime}'),
            ('kuangan', '${this.datetime}', '${this.datetime}'),
            ('kurikulum', '${this.datetime}', '${this.datetime}'),
            ('laporan', '${this.datetime}', '${this.datetime}'),
            ('jurnal', '${this.datetime}', '${this.datetime}'),
            ('penilaian', '${this.datetime}', '${this.datetime}'),
            ('cuti', '${this.datetime}', '${this.datetime}'),
            ('jadwal', '${this.datetime}', '${this.datetime}'),
            ('khs', '${this.datetime}', '${this.datetime}'),
            ('krs', '${this.datetime}', '${this.datetime}'),
            ('nilai', '${this.datetime}', '${this.datetime}'),
            ('pembayaran', '${this.datetime}', '${this.datetime}'),
            ('tugas', '${this.datetime}', '${this.datetime}'),
            ('wisuda', '${this.datetime}', '${this.datetime}'),
            ('notifikasi', '${this.datetime}', '${this.datetime}'),
            ('util', '${this.datetime}', '${this.datetime}');
        `)
        .then(()=>console.log(this.table_name + ' table seeding success ✅'))
        .catch((e)=>console.log(this.table_name + ' table seeding failed ❌'+e))
    }
}