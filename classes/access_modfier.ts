//protect
class bottlemaker {
    protected name='Parrot'
}

class MetalBottle extends bottlemaker {
    public material="metal";
    changName(){
        this.name="new name";
    }
}

let b4 = new MetalBottle();
b4.name = "new name"; // Error: Property 'name' is protected and only accessible within class 'bottlemaker' and its subclasses.