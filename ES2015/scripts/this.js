"use strict";
// When you have a function, it will create its own context for this keyword.
// So this keyword in setTimeout func is bound to the function containing this.
// It does not have the context of the outer function, thus this is undefined.
// var employee = {
//     id: 1,
//     greet: function(){
//         setTimeout(function(){console.log(this.id)}, 1000);
//     }
// };
// employee.greet();
// To work around the above problem, save this context in another variable:
var employee1 = {
    id: 1,
    greet: function () {
        var self = this;
        setTimeout(function () { console.log(self.id); }, 1000);
    }
};
employee1.greet();
// Arrow function will not auto create this, so this here refers to the parent's.
var employee2 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee2.greet();
//# sourceMappingURL=this.js.map