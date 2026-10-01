class User{
    constructor(public readonly name: string) {}

        changeName(){
            this.name = 'hellow';
        }
}

let user1 = new User('John');
user1.changeName();