export default class KeyVal {
        private key!:string|any
        private value!:string|any
    
        public getKey(): string {
            return this.key;
        }
    
        public setKey(key: string|any): KeyVal {
            this.key = key;
            return this
        }
        
        public getValue(): string|any {
            // console.log('===');
            // console.log(this.value);
            // console.log(typeof this.value);
            // console.log();
            // console.log('===');
            if(this.value === "NULL") return null 
            return this.value;
        }
        
        public setValue(value: string|any): KeyVal|any {
            this.value = value;
            return this
        }
}