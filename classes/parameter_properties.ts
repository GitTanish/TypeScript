class User1{
    constructor(public name: string, public age?: number, public gender?: string) {}
    
}
// ? --> optional parameter

let u1=new User1('John', 30, 'male');
let u2 = new User1('Batak',18,'female');