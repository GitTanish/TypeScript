class Hero{
    static version='1.0';

    static getRandomNumbers(){
        return Math.random();
    }
}
// static members can be accessed without creating an instance of the class
Hero.version