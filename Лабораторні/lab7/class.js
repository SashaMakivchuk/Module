class Account{
    constructor(code,firstName,lastName,position, salary, numberOfChildren,experiance){
        this.code = code;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this. numberOfChildren = numberOfChildren;
        this.experiance = experiance;
        
    }
    
}
class AccountWithImg extends Account{
    constructor(code,firstName,lastName,position, salary, numberOfChildren,experiance, image){
        super(code,firstName,lastName,position, salary, numberOfChildren,experiance);
        this.image = image;
    }
}