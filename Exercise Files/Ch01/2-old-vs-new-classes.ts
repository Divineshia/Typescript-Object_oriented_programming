export class Message {
    title;
    message;
    id;
}

//Older version of writing before 2015 , before ES6
function Message2(title, message, id){
    this.title=title;
    this.message = message;
    this. id = id;
}
 
const message5 = new Message2("Hello", "world", "1015");