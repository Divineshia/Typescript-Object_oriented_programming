/**
 * -----------------------------
 * Challenge 3: Encapsulation
 * -----------------------------
 * 1. Use the classes below.
 * 2. Add an appropriate readonly property to the User class.
 * 3. Be explicit with your public properties our User class.
 * 4. Add an appropriate protected property in User and access it with a private method in Admin.
 */

export class User {
    public readonly id:string;
    public firstName: string;
    public lastName: string;
    protected email: string;
    readonly password:string;
    protected dob:Date;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}

export class Admin extends User {
    public readonly yearBorn:number

    constructor(firstName: string, lastName: string, email: string, password:string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.yearBorn = this.getYear();
        
    }
    private getYear():number{
        return this.dob.getFullYear();
    }
}

const user1 = new Admin('Leo', 'Stratton', 'leo@gmail.com', '1234');
user1.password;


