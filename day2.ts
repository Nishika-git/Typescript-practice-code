//INTERSECTION &
type Student = {
    name: string,
    age: number
}

type StudentInfo = {
    course: string
}

type Details = Student & StudentInfo;

const s: Details = {
    name: "Gurleen",
    age: 22,
    course: "Web development"
};

//FUNCTIONS
function greet(Sname: string): string {
    return "Hello " + Sname;
}

console.log(greet("Gurleen"));

//ARROW FUNCTIONS
const square = (n: number): number => n * n;
console.log(square(2));


//OPTIONAL & DEFAULTS INPUTS
function welcome(name: string, greeting?: string) {
    return (greeting ?? "hi") + ", " + name;
}

console.log(welcome("Gurleen"));
console.log(welcome("Gurleen", "hello "));

function power(base: number, exp: number = 2) {
    return base * exp;
}

console.log(power(3));
console.log(power(3, 3));


//FUNCTION THAT RETURN NOTHING - VOID 
function sayHi(): void {
    console.log("Hi !");
}
sayHi();

//OBJECTS
const student: {
    name: string,
    age: number
} = {
    name: " Gurleen",
    age: 22,

}
console.log(student.name);
console.log(student.age);
//console.log(student.grade);

//OBJECTS - OPTIONAL & READ-ONLY
type Products = {
    readonly id: number,    //read-only - cannot change the value
    productName: string,
    discount?: number      //optional
}

const things: Products = {
    id : 1,
    productName  :"watch",
    
};
console.log(things.productName = "Smart Watch");
//things.id = 1;


//INTERFACE
interface User {
   readonly id :number ,
    name : string,
    email?:string
}

const user : User  = {
    id : 34,
    name :"Gurleen"
}
console.log(user.id);

//EXTENDING AN INTERFACE
interface Animal {
    name : string
}

interface Dog extends Animal{
    breed : string
}

const d : Dog  ={
    name : "tommy",
    breed : "beagle"
}

const colors = ["red" , "green", "blue"] as const ;
type Color = (typeof colors) [number];
const c:Color ="green";
console.log(c);

//TYPE GUARD
function double(x: string | number){
    if (typeof x === "number"){
        return x *2;
    }
    return x+x;
}
console.log(double(2));
console.log(double("gurleen"));


//IN - CHECK IF A PROPERTY EXISTS OR NOT
type Bird ={ fly():void };
type Fish = { swim():void };

function move (pet : Bird | Fish){
    if ("fly" in pet){
        pet.fly();
    }
    else{
        pet.swim();
    }
}