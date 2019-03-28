"use strict";
// let getValue = function(value=10, bonus=5){
//     console.log(value+bonus);
// };
// getValue();
// getValue(20);
// getValue(20, 30);
// getValue(undefined, 30); // 40
// use variables to assign default function parameters
var percentBonus = 0.1;
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus; }
    console.log(value + bonus);
};
getValue(); // 11
getValue(20); // 22
getValue(20, 30); // 50
// getValue(undefined, 30); // 40
// use function to assign default function parameters
var percentBonus1 = function () { return 0.1; };
var getValue1 = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus1(); }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue1(); // 11   0
getValue1(20); // 22   1
getValue1(20, 30); // 50   2
// getValue(undefined, 30); // 40
//# sourceMappingURL=default_func_params.js.map