// getter -> helps to get the value from a class
// setter -> helps to set the value in a class

class User2{
    constructor(public _name: string, public _age?: number, public gender?: string) {}

    get name(){
        return this._name;
    }
    


    set name(value: string){
        this._name = value;
    }

    
}

let q1=new User2('John', 30, 'male');