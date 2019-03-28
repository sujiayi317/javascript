"use strict";
// rest operator in function definition takes an array and spread it into elements
var displayColors1 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var msg1 = "List of Colors";
displayColors(msg1, 'Red');
displayColors(msg1, 'Red', 'Blue');
displayColors(msg1, 'Red', 'Blue', 'Green');
//# sourceMappingURL=rest_operator.js.map