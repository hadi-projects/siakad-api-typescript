import Model from "./meta/model";
import moment from "moment";
import d from 'mysql2'
import KeyVal from "./keyval.model";

export default class VaultModel extends Model {
    constructor() {
        super('wallet_addresses')
    }

    private id:string;
    private client_base_id:string;
    private asset_name:string;
    private asset_symbol:string;
    private protocol_symbol:string;
    private address:string;
    private legacy_address:string;
    private custody:string;
    private tag:string;
    private total:string;
    private balance:string;
    private locked_amount:string;
    private available:string;
    private pending:string;
    private frozen:string;
    private staked:string;
    private status:string;

    public set_id(id: string|any): VaultModel {
        this.id = id
        this.add_values(new KeyVal().setKey('id').setValue(d.escape(id)))
        return this
    }
    public get_id():string{
        return this.id
    }
    
    
    public set_client_base_id(client_base_id: string|any): VaultModel {
        this.client_base_id = client_base_id
        this.add_values(new KeyVal().setKey('client_base_id').setValue(d.escape(client_base_id)))
        return this
    }
    public get_client_base_id():string{
        return this.client_base_id
    }
}