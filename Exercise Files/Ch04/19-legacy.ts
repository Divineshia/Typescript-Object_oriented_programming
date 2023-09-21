export class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
     }

    doesEmailMatch(email: string): boolean {
        return this.email === email;
    }
}

//Before ES6
function UserLegacy(firstName,lastName,email){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;

    this.doesEmailMatch = function(email){
        return this.email===email;
    }
}
const user2 = new UserLegacy('Dylan', 'Osrael', 'dylan@email.com');
user2.firstName;