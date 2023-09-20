// Base / Parent Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Derived / Child Class(s)
export class Dog extends Animal {
    bark():string{
        return 'Woof! Woof! Woof!'
    }
}
const dog = new Dog(2, 4 ,'Mobi');
dog.name;
dog.bark();

//Another child class
export class Cat extends Animal {
    meow():string{
        return 'Meowww! Hiss!'
    }

}
const cat = new Cat( 1 ,4 , 'kitty');
cat.age;
cat.meow();
