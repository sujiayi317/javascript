"use strict";
var colors = ['Red', 'Blue', 'Green'];
for (var index in colors) {
    console.log(colors[index]);
}
// use for of loop to loop over iterables--array
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
// to loop over iterables--string
var letters = "ABC";
for (var _a = 0, letters_1 = letters; _a < letters_1.length; _a++) {
    var letter = letters_1[_a];
    console.log(letter);
}
var obj = { prop: 0 };
obj.prop = obj.prop + 1;
console.log(obj);
// You can use const with for-of loops, where a fresh binding is created for each iteration:
var arr = ['hello', 'world'];
for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
    var elem = arr_1[_b];
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
//# sourceMappingURL=for_of_loop.js.map