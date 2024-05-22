
let idCounter = 0;
class AccountWithId extends AccountWithImg{
    constructor(code,firstName,lastName,position, salary, numberOfChildren,experiance, image){
        super(code,firstName,lastName,position, salary, numberOfChildren,experiance, image);
        this._id = idCounter++;
    }
    get id(){
        return this._id;
    }
}
class Accounting{
    constructor(){
        this.acc =[];
    }
    get count(){
        return this.acc.length;
    }
    add(account){
        if(!(account instanceof AccountWithId))
        throw 'no account like that';
        if(!(this.acc.some(el => el.id == account.id)))
            this.acc.push(account);
    
    }
    getById(id){
        return this.acc.find( account => account.id == id);
    }
    
    getAll(){
        return[...this.acc];
    }
    
    update(id, newAcc){
        let accUser = this.getById(id);
        if(!accUser)
        throw "Not found";

        for(let key of ["code","firstName","lastName","position","salary","numberOfChildren","experiance"])
            if(newAcc[key])
                accUser[key] = newAcc[key];
    }
    delete(id){
        let accId = this.acc.findIndex(account=>account.id==id);
        if(accId == -1)
            throw "NotFound";
        this.acc.splice(accId,1);
    }
}