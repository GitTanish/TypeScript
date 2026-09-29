class BottleMaker2{
    constructor(public name:string){
        this.name = name;
    }

    changing() {
        this.name ='lalala' // we can change the name because it is public
    }
}

class MetalBottleMaker2 extends BottleMaker2{
    constructor(public name:string){
        super(name);
    }

    getValue(){
        console.log(this.name); // we can access the name because it is public
    }
}


let b4= new MetalBottleMaker2("clinton");
b4.name = "Hululu"; // we can change the name because it is public
b4.getValue(); // we can access the name because it is public 