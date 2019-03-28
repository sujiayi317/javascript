"use strict";
var getRegvalue = function () {
    return 10;
};
console.log(getRegvalue());
var getArrowvalue1 = function () {
    return 10;
};
console.log(getArrowvalue1());
var getArrowvalue2 = function () { return 10; };
console.log(getArrowvalue2());
// single param can omit ()
var getArrowvalue3 = function (m) { return 10 * m; };
console.log(getArrowvalue3(5));
// multiple params cannot omit ()
var getArrowvalue4 = function (m, bonus) { return 10 * m + bonus; };
console.log(getArrowvalue4(5, 50));
console.log(typeof getArrowvalue4); // function
//# sourceMappingURL=arrow_function.js.map