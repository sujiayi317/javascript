"use strict";
var _a;
var firstname = "Chandler";
var lastname = "Bing";
// let person = {
//     firstname: firstname, 
//     lastname: lastname
// };
// when the property name is the same as the var name: use shorthand notation
var person = {
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        // isSenior: function(){   
        // if we have a function to a property, : and function can be omitted
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
// object property names can contain spaces within " ", and be refered in [ ]
// variable can be used as property names:
var ln = "last name";
var person1 = (_a = {
        "first name": "Chandler"
    },
    _a[ln] = "Bing",
    _a);
console.log(person1);
//# sourceMappingURL=object_literals.js.map