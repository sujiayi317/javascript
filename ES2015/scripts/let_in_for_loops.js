"use strict";
// show 6 for 5 times
// for(var i=1; i<=5; i++){
//     setTimeout(function(){console.log(i);}, 1000)
// }
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
// show 1 to 5 simply by changing var to let
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
//# sourceMappingURL=let_in_for_loops.js.map