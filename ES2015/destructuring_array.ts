// to pull apart arrays
let employee = ["Chandler", "Bing"];
let [fname, lname, gender] = employee;
console.log(fname);
console.log(lname);
console.log(gender);    // undefined



let employee_g = ["Chandler", "Bing", "Male"];
let [, , gender_g] = employee_g;
console.log(gender_g);    // "Male"


// destructure using rest operator__a single var contains a group of elements
let [fname_f, ...elements] = employee_g;
console.log(fname_f);
console.log(elements);  // ["Bing", "Male"]

// destructure using default values
// But if employee has a gender, default "Male" is not used
let [fname_d, lname_d, gender_d = "Male"] = employee;
console.log(fname_d);
console.log(lname_d);
console.log(gender_d); 