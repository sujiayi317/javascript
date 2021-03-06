"use strict";
// const keyword: create read only constants
// similar to let: block scope, not hoisted
var num1;
// But const declarations must be initialized
var num2 = 10;
var obj1 = {
    name: "joatmon"
};
console.log(obj1.name);
// obj1 = {}; Error! Cannot assign to obj1 because it's a const
// But assigning new value to a property of a object works
obj1.name = "Chandler";
console.log(obj1.name);
//# sourceMappingURL=const.js.map