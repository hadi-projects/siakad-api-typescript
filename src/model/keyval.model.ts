export default class KeyVal {
        private key!:string
        private value!:string 
    
        public getKey(): string {
            return this.key;
        }
    
        public setKey(key: string): void {
            this.key = key;
        }
    
        public getValue(): string {
            return this.value;
        }
    
        public setValue(value: string): void {
            this.value = value;
        }
    
        validate(keyval:KeyVal):boolean{
            if(
                keyval.getKey() == null || keyval.getKey() == undefined || keyval.getKey() == "" ||
                keyval.getValue() == null || keyval.getValue() == undefined || keyval.getValue() == ""
            ){
                return false
            }
            return true
        }
}