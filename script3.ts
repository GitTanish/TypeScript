// Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type Aliases
// Intersection Types


// 1. Interfaces and defining object shapes
interface User{
    name:string,
    email:string,
    password:string
    gender?:string // optional property
}

function getDataOfUser(obj:User){
    obj.password;
}

getDataOfUser({name:"John",email:"sdhrtkjtg", password:"123456"}); 
    // This will throw an error because the if password property or any other property is missing

interface Aquarium{
    fishType: String,
    foodType: String,
    tankSize: number,
    decoration?: String
}

function getAquariumData(obj:Aquarium):void{
    obj.fishType="Blood Parrot Cichlid";
}

getAquariumData({
    fishType:"Blood Parrot Cichlid",
    foodType:"Pellet Food",
    tankSize: 130,
    decoration: "Bare Bottom"
})

// 2. Extending interfaces
interface Admin extends User{
    admin: boolean;
}

function getData(obj:Admin){
    obj.admin;
}

// two interfaces of the same name are actually merged together in TypeScript. This is called declaration merging.
interface abcd{
    name: string;
}
interface abcd{
    email: string;
}

function getDataOfAbcd(obj:abcd){
    obj.name,
    obj.email;
}

// 3. Type Aliases

type value = string |number| null; // custom type alias
type shunya = null| undefined; // custom type alias

let a: value;
let b: shunya;

// 4. Intersection Types

type user = {
    name: string,
    email: string,
}

type admin = user & {
    getDetails(user:string):void
}

function abcd(a:admin){
    a.getDetails("John Doe")
}