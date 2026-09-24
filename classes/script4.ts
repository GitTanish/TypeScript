// Classes and Objects
// Class definition
// Constructor
// Access modifiers (public, private, protected)
// Readonly properties
// Optional properties
// Parameter properties
// Getters and Setters
// Static members
// Abstract classes and methods

class BottleMaker{
    constructor(public name: string, public price: number) {

    }
} 
let b1 =new BottleMaker("Milton", 1200); // 'new' constructor invocation + object creation

class HumanMaker{
    age=0;
    public name;
    public Gender;
    constructor(name: string, Gender: string){
        this.name=name;
        this.Gender=Gender;

    }
}

let b2=new HumanMaker("John", "Male"); // 'new' constructor invocation + object creation

let b3 = new HumanMaker("Binod", "Male");

class Music{
    constructor(public name: string, public artist: string, public thumbnail: string ="somethumbnail.jpg", public length: number, public Free: boolean){
        if (!thumbnail) {
            this.thumbnail = "somethumbnail.jpg";
        }
    }
}

let m1=new Music("WarCry of Chunchumaru", "Me", "", 3.5, true);

let m2 = new Music("Gaadi wala aaya ghar se kachra nikaal","Unknown", "kachra.jpg", 345000, true);