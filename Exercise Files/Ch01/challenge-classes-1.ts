/**
 * -----------------------------
 * Challenge 1: Classes
 * -----------------------------
 * 1. Create a User class.
 * 2. Add a firstName, lastName, and email property.
 * 3. Add a get to return fullName.
 * 4. Add a method to check if your email param matches the user's current email.
 */
// Create a User class
export class User{
    firstName: string;
    lastName: string;
    email: string;

    constructor (firstName: string,lastName: string,
        email: string){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

    //Add a get to return fullName
    get fullName():string{
        const fullname = this.firstName + this.lastName;
        return fullname;
        //return `${this.firstName} ${this.lastName};
    }

    //Add a method to check if your email param matches the user's current email.
    checkEmail(email:string):boolean{
        return (this.email===email);
          
        }
    }

 const newUser = new User('Shia', 'Sharon', 'shia@email.com');
 newUser.checkEmail('shia@email.com');

newUser.fullName;