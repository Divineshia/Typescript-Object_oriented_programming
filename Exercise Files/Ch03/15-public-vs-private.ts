export class Animal {
    public age: number;
    private legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
    public get ourLegs(){
        return this.legs;
    }
}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    //legs cannot be accessed outside Animal class bec of private 
    // public get ourLegs(){
    //     return this.legs;
    // }
}

const cat = new Cat({age:4, legs:4, name:'kitty'});
cat.age;