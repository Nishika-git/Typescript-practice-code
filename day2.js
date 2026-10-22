"use strict";
const s = {
    name: "Gurleen",
    age: 22,
    course: "Web development"
};
//FUNCTIONS
function greet(Sname) {
    return "Hello " + Sname;
}
console.log(greet("Gurleen"));
//ARROW FUNCTIONS
const square = (n) => n * n;
console.log(square(2));
//OPTIONAL & DEFAULTS INPUTS
function welcome(name, greeting) {
    return (greeting ?? "hi") + ", " + name;
}
console.log(welcome("Gurleen"));
console.log(welcome("Gurleen", "hello "));
function power(base, exp = 2) {
    return base * exp;
}
console.log(power(3));
console.log(power(3, 3));
//FUNCTION THAT RETURN NOTHING - VOID 
function sayHi() {
    console.log("Hi !");
}
sayHi();
//OBJECTS
const student = {
    name: " Gurleen",
    age: 22,
};
console.log(student.name);
console.log(student.age);
const things = {
    id: 1,
    productName: "watch",
};
console.log(things.productName = "Smart Watch");
const user = {
    id: 34,
    name: "Gurleen"
};
console.log(user.id);
const d = {
    name: "tommy",
    breed: "beagle"
};
const colors = ["red", "green", "blue"];
const c = "green";
console.log(c);
//TYPE GUARD
function double(x) {
    if (typeof x === "number") {
        return x * 2;
    }
    return x + x;
}
console.log(double(2));
console.log(double("gurleen"));
function move(pet) {
    if ("fly" in pet) {
        pet.fly();
    }
    else {
        pet.swim();
    }
}
