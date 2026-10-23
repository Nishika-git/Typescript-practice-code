//UTILITY TYPES
interface User {
    name: string,
    age: number,
    email: string,
    password: string
    course?: string
}

const update: Partial<User> = {
    name: "Gurleen",
    email: "gurleen@gmail.com"
}

const update1: Required<User> = {
    name: "Gurleen",
    age: 22,
    email: "gurleen@gmail.com",
    password: "sdfas",
    course: "dsfg"
}

const update2: Readonly<User> = {
    name: "Gurleen",
    age: 22,
    email: "gurleen@gmail.com",
    password: "sdfas",
    course: "dsfg"
}

//update2.age= 34     //cant change read-only prop or type

type UserContact = Pick<User, "name" | "email">

type PublicUser = Omit<User, "password">


//RECORD  -- same data type based
type Role = "admin" | "user" | "guest"

const permissions: Record<Role, boolean> = {
    admin: true,
    user: true,
    guest: false
}

//GENERICS
function getValue<T>(value: T): T {
    return value;
}

getValue<string>("jsgjf");
getValue<number>(342);
getValue<boolean>(true);

//GENERIC WITH ARRAYS
function getFirst<T>(items: T[]): T  {
    return items[0];
}

const firstNumber = getFirst([10, 29, 345]);
console.log(firstNumber);
const arrayName = getFirst(["gurleen", "Nishika"]);
console.log(arrayName);

//GENERIC WITH MULTIPLE PARAMETERS
function pair<T , U>(first:T, second:U){
    return {first , second}
}

const result = pair<string, number>("skjfh", 354);
const result1 = pair< number, boolean>( 354, true);


//GENERIC WITH INTERFACE
interface Box<T>{
    value:T;
}
const numberBox :Box<number>= {value: 35};
const numberBox2 :Box<string>= {value: "dgd"};

//GENERIC EXTENDS
function printLength<T extends { length: number }>(  value: T
): number {
 return value.length;
}

console.log(printLength("hello"));

