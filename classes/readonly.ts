class User{
    constructor(public readonly name: string) {}

        getName(){
            return this.name;
        }
}

let user1 = new User('John');
user1.getName();