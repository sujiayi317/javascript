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
// You can also use Object() to convert values to objects:
console.log(123 instanceof Number); // false
console.log(Object(123) instanceof Number); //true
/* -------------------------------------------------------------------------
Lenient equality is one of JavaScript’s quirks. It often coerces operands. Some of those coercions make
sense:
> '123' == 123
true
> false == 0
true
Others less so:
> '' == 0
true
Objects are coerced to primitives if (and only if!) the other operand is primitive:
> [1, 2, 3] == '1,2,3'
true
> ['1', '2', '3'] == '1,2,3'
true
If both operands are objects, they are only equal if they are the same object:
> [1, 2, 3] == ['1', '2', '3']
false
> [1, 2, 3] == [1, 2, 3]
false
> const arr = [1, 2, 3];
> arr == arr
true
Lastly, == considers undefined and null to be equal:
> undefined == null
true
*/
/* ------------------------------------------------------------
Strict equality never coerces. Two values are only equal if they have the same type. Let’s revisit our
previous interaction with the == operator and see what the === operator does:
> false === 0
false
> '123' === 123
false
An object is only equal to another value if that value is the same object:
> [1, 2, 3] === '1,2,3'
false
> ['1', '2', '3'] === '1,2,3'
false
> [1, 2, 3] === ['1', '2', '3']
false
> [1, 2, 3] === [1, 2, 3]
false
> const arr = [1, 2, 3];
> arr === arr
true
The === operator does not consider undefined and null to be equal:
> undefined === null
false
*/ 
//# sourceMappingURL=object_literals.js.map