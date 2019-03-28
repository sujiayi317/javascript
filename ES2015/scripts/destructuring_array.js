"use strict";
// to pull apart arrays
var employee = ["Chandler", "Bing"];
var fname = employee[0], lname = employee[1], gender = employee[2];
console.log(fname);
console.log(lname);
console.log(gender); // undefined
var employee_g = ["Chandler", "Bing", "Male"];
var gender_g = employee_g[2];
console.log(gender_g); // "Male"
// destructure using rest operator__a single var contains a group of elements
var fname_f = employee_g[0], elements = employee_g.slice(1);
console.log(fname_f);
console.log(elements); // ["Bing", "Male"]
// destructure using default values
// But if employee has a gender, default "Male" is not used
var fname_d = employee[0], lname_d = employee[1], _a = employee[2], gender_d = _a === void 0 ? "Male" : _a;
console.log(fname_d);
console.log(lname_d);
console.log(gender_d);
//# sourceMappingURL=destructuring_array.js.map