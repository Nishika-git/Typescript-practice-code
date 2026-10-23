import {add, PI} from "./math.js";
import getUser from "./math.js";
import type {User, Status} from "./types.js";

console.log(add(3, 3));

console.log(PI);

console.log(getUser());

const user :User = {name :"dfgsd", age:34};
const status : Status = "active";