"use strict";
// spread operator in function call takes an array and spread it into elements
var displayColors = function (message) {
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
var msg = "List of Colors";
var colorArray = ['Orange', 'Yellow', 'Indigo'];
// displayColors(msg, 'Red');
// displayColors(msg, 'Red','Blue');
// displayColors(msg, 'Red','Blue','Green');
displayColors.apply(void 0, [msg].concat(colorArray));
//# sourceMappingURL=spread_operator.js.map