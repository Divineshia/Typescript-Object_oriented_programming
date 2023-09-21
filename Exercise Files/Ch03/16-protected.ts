export class Animal {
    protected age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

//Child
export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }
    get birthday():number{
        return this.age+1;
    }
}

const cat1= new Cat({age:4 , legs:4, name:'peaches'});
cat1.age;

//Shape
export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;
}
