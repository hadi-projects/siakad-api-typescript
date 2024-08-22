import Model from "./meta/model";
import moment from "moment";
import d from 'mysql2'
import KeyVal from "./keyval.model";

export default class CarModel extends Model {
    constructor() {
        super('crypto_asset_reports')
    }

    private id:string;
    private report_date:string;
    private asset_name:string;
    private asset_symbol:string;
    private volume:string;

    // public columns:string[]=['id','report_date', 'asset_name', 'asset_symbol', 'volume']

    public set_id(id: string|any): CarModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }
    public get_id():string{
        return this.id
    }
    
    
    public set_report_date(report_date: string|any): CarModel {
        this.report_date = report_date
        this.add_values(new KeyVal().setKey('report_date').setValue(d.escape(report_date)))
        return this
    }
    public get_report_date():string{
        return this.report_date
    }
    
    
    public set_asset_name(asset_name: string|any): CarModel {
        this.asset_name = asset_name
        this.add_values(new KeyVal().setKey('asset_name').setValue(d.escape(asset_name)))
        return this
    }
    public get_asset_name():string{
        return this.asset_name
    }
    
    
    public set_asset_symbol(asset_symbol: string|any): CarModel {
        this.asset_symbol = asset_symbol
        this.add_values(new KeyVal().setKey('asset_symbol').setValue(d.escape(asset_symbol)))
        return this
    }
    public get_asset_symbol():string{
        return this.asset_symbol
    }
   
   
    public set_volume(volume: string|any): CarModel {
        this.volume = volume
        this.add_values(new KeyVal().setKey('volume').setValue(d.escape(volume)))
        return this
    }
    public get_volume():string{
        return this.volume
    }
}