export default class PaginationModel {
    private search:string;
    private page:number;
    private limit:number;
    private offset:number;
    private count:number;

    public set_search(search:string):PaginationModel{
        this.search = search
        return this
    }
    public get_search(){
        return this.search
    }
   

    public set_page(page:number):PaginationModel{
        this.page = page
        return this
    }
    public get_page(){
        return this.page
    }
    
    
    public set_limit(limit:number):PaginationModel{
        this.limit = limit
        return this
    }
    public get_limit(){
        return this.limit
    }
    
    
    public set_offset(offset:number):PaginationModel{
        this.offset = offset
        return this
    }
    public get_offset(){
        return this.offset
    }
    
    
    public set_count(count:number):PaginationModel{
        this.count = count
        return this
    }
    public get_count(){
        return this.count
    }
}