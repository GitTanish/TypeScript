// basic types
// primitives( number, string, boolean, null, undefined, symbol, bigint)
// Arrays
// Tuples
// Enums
// Any, Unknown, Never, Void, Undefined, Null

// primitives and reference
// [] {} () -> reference types

// tuples
let arr: [string, number] = ["Orange", 22];

let arr2:[number, string]=[19, "Apple"];

//enumerations
enum UserRole {
    ADMIN= "admin",
    GUEST= "guest",
    SUPER_ADMIN= "super_admin"
}

UserRole.ADMIN; // "admin"

enum StatusCode {
    ABANDONED ='abandoned status code 500',
    NOTFOUND = 'not_found status code 404',
}

StatusCode.NOTFOUND; // "abandoned status code 500"

let a: number;
a=88;
let b; // any type
let c: unknown;

if(typeof c === 'string'){
    c.toUpperCase();
};


//void <- returns nothing
function abdc():void{
    console.log('hey')
}

//
function diablo():string{
    return 'hello'
}

//null
let j:null;
let k: null | string;
k='cat';

//never
function jklm():never{
    while(true){
        console.log('hello')
    }
}

//jklm(); // this function will never return anything, it will run forever
console.log('this will never be printed') // this line will never be executed
