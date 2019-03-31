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
// use const when reassignment is needed, else use let
var PI = 3.14;
var MAX_SIZE = 100;
var a1 = 5;
var a2 = 10;
a1 = a1 + a2;
a2 = a1 - a2;
a1 = a1 + a2;
// You can use const with for-of loops, where a fresh binding is created for each iteration:
var arr = ['hello', 'world'];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elem = arr_1[_i];
    console.log(elem);
}
// Output:
// 'hello'
// 'world'
// In plain for loops, you must use let, however:
for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
}
//# sourceMappingURL=let_vs_const.js.map