// const keyword: create read only constants
// similar to let: block scope, not hoisted

let num1;

// But const declarations must be initialized
const num2 = 10;

const obj1 = {
    name: "joatmon"
};

console.log(obj1.name)


// obj1 = {}; Error! Cannot assign to obj1 because it's a const
// But assigning new value to a property of a object works
obj1.name = "Chandler"
console.log(obj1.name)
 
// use const when reassignment is needed, else use let
const PI =3.14;

const MAX_SIZE = 100;

let a1 = 5;
let a2 = 10;

a1 = a1 + a2;
a2 = a1 - a2;
a1 = a1 + a2;

