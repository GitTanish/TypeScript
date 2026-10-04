//Funtions
// Function Types
// Optional and default Parameters
// Rest Parameters
// Overloads


// A callback is simply a function that you give to another function, so that the other function can call it later.
// function callback
function abcdef(name: string, age: number, callback:(arg:string)=> void){
    callback("hey");
}

abcdef("harsh", 23,(arg:string) => {
    console.log(arg);
})

// Optional and default Parameters
function abcd(Name: string, age: number, gender: string = 'undefined'){

    console.log(Name, age, gender);
}

abcd("harsh", 23,"male");
abcd("lakshay", 22);

// Rest Parameters -> ... rest/spread
// ... means that the function can take any number of arguments and it will be stored in an array 
function xyz(...args: number[]){
    console.log(args);
}

xyz(1,2,3,4,5,6,7,8,9,10);

function xzy(...args: string[]){
    console.log(args);
}

xzy("harsh", "lakshay", "sahil", "rohit");