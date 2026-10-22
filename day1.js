"use strict";
const message = "hello , typescript !";
console.log(message);
function total(price, qty) {
    return price * qty;
}
total(234, 767);
//ANNOTATION
let fullname = "nishika";
console.log(fullname);
//INFERENCE
let city = "Pune";
console.log(city);
//ANY & UNKNOWN
let a = "hello";
a = 5;
let u = "hello";
if (typeof u === "string") {
    console.log(u.toUpperCase());
}
//UNIONS
const msg = 5656;
console.log(msg);
//LITERALS TYPES
let light = "green";
const un = {
    name: "Nishika",
    city: "ludhiana"
};
console.log(un.population ?? "Unknown"); //empty or not
console.log(un.city);
//ARRAYS
const scores = [453, 3452, 2354, 452];
const students = ["Nishika", "Gurleen"];
console.log(scores.push(3456));
console.log(scores);
console.log(students.push("aksdh"));
console.log(students);
//TUPLES  -- TO MATCH ORDER
const accounts = [34, "aksjfh"];
//ENUMS
var Status;
(function (Status) {
    Status["pending"] = "pending";
    Status["shipped"] = "shipped";
    Status["delivered"] = "delivered";
})(Status || (Status = {}));
let order = Status.pending;
order = Status.shipped;
order = Status.delivered;
console.log(order);
//NUMBER ENUMS - FOR INDEXING
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.down);
let myRole = "Viewer";
const s = {
    id: 45,
    fname: "Nishika"
};
console.log(s.id);
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log(add(3, 4));
console.log(multiply(3, 4));
