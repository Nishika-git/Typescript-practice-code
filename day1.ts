const message :string = "hello , typescript !";
console.log(message);


function total(price:number, qty:number){
    return price * qty;
}
total(234, 767);


//ANNOTATION
let fullname:string = "nishika";
console.log(fullname);


//INFERENCE
let city="Pune";
console.log( city);


//ANY & UNKNOWN
let a:any = "hello";
a=5;

let u:unknown ="hello";
if(typeof u === "string"){
    console.log(u.toUpperCase());
}

//UNIONS
const msg :string | number= 5656;
console.log(msg);

//LITERALS TYPES
let light: "red" | "green" | "yellow" = "green";

//TYPES
type User = {
    name:string;
    city:string;
    population?: number;  //optional
}

const un:User = {
    name:"Nishika",
    city:"ludhiana"
}

console.log(un.population ?? "Unknown");   //empty or not
console.log(un.city);

//ARRAYS
const scores:number[] = [453, 3452, 2354, 452];
const students:string[] =["Nishika", "Gurleen"];

console.log(scores.push(3456));
console.log(scores);
console.log(students.push("aksdh"));
console.log(students);

//TUPLES  -- TO MATCH ORDER
const accounts: [number, string] = [ 34, "aksjfh"];


//ENUMS
enum Status {
    pending ="pending",
    shipped = "shipped",
    delivered = "delivered"
}

let order:Status = Status.pending;
order =Status.shipped;
order =Status.delivered;
console.log(order);


//NUMBER ENUMS - FOR INDEXING
enum Direction {
    up, down , left, right
}
console.log(Direction.down);


//No use of enums
type Role = "admin" | "editor" | "Viewer";
let myRole:Role = "Viewer";
//myRole ="klsjdjfhk";   //not matched


//TYPE ALIASES
type ID= string | number;

type Student = {
    id : ID,
    fname: string
}

const s:Student ={
    id :45,
    fname: "Nishika"
};

console.log(s.id);

//CALCULATION
type MathFn = (a: number, b: number) => number;

const add:MathFn = (a, b) => a+b;
const multiply:MathFn = (a, b) => a*b;
console.log(add(3, 4));
console.log(multiply(3, 4));