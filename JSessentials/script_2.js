// prototype inheritance -----------------------------------------------------------------
// every object inherits properties and methods from its prototype
// prototype itself is an object
// when we create objects using literal or constructor notations, built-in global Object() 
// function is called, and property __proto__ will be sent to the object

let aobj = {};
let bobj = new Object();

console.log(aobj);
console.log(bobj);

Object.prototype.greet = 'hello';

function afunc() {};

// afunc.prototype

// [object Object]: {constructor: function afunc() {}}
// constructor: function afunc() {}
// __proto__: Object

function PersonConstructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

PersonConstructor.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
};

PersonConstructor.prototype.greet = 'Hello from prototype object';

let personC1 = new PersonConstructor('John', 'Smith');
personC1.greet = 'Hello from personC1 object';

let personC2 = new PersonConstructor('Nick', 'Doe');

console.log(personC1);
console.log(personC2);

console.log(personC1.getFullName());
console.log(personC2.getFullName());

console.log(personC1.greet);
console.log(personC2.greet);


// Object.create()
// allows us to create object and defines for that object prototype that we want
// it is a method of a Global Object

console.dir(Object);

let obj1 = Object.create(Object.prototype, {
    name: {
        value: 'Linda'
    }
});
// obj1.name = 'Linda';

console.log(obj1);


// ----------------------
function PersonConstructor2() {
    this.name = 'Linda';
}
PersonConstructor2.prototype.greet = 'Hello';
let psC1 = new PersonConstructor2();
let psC2 = Object.create(PersonConstructor2.prototype);
console.log(psC1);
console.log(psC2);

/*
[object Object]: {name: "Linda"}
    name: "Linda"
    __proto__: Object
        constructor: function PersonConstructor2() { this.name = 'Linda'; }
        greet: "Hello"
        __proto__: Object
            constructor: function Object() { [native code] }
            greet: "hello"
*/

/*
[object Object]: {}
    __proto__: Object
        constructor: function PersonConstructor2() { this.name = 'Linda'; }
        greet: "Hello"
        __proto__: Object
            constructor: function Object() { [native code] }
            greet: "hello"
*/

//----------- use manually created object as prototype
let firstProto = {
    sayHello: function() {
        return 'hello ' + this.name;
    }
};

let john = Object.create(firstProto, {
    name: {
        value: 'John'
    }
});
console.log(john);

/*
[object Object]: {name: "John"}
    name: "John"
    __proto__: Object
        sayHello: function () { return 'hello ' + this.name; }
        __proto__: Object
*/

// ---------------------------------------------------
let secondProto = Object.create(firstProto, {
    sayHi: {
        value: function() {
            return 'Hi ' + this.name;
        }
    }
});
console.log(secondProto);

/*
[object Object]: {sayHi: function () { return 'Hi ' + this.name; }}
    sayHi: function () { return 'Hi ' + this.name; }
    __proto__: Object
        sayHello: function () { return 'hello ' + this.name; }
        __proto__: Object
*/

// --------------------------------------------------
let bob = Object.create(secondProto, {
    name: {
        value: 'Bob'
    }
});

console.log(bob);

/*
[object Object]: {name: "Bob"}
    name: "Bob"
    __proto__: Object
        sayHi: function () { return 'Hi ' + this.name; }
        __proto__: Object
            sayHello: function () { return 'hello ' + this.name; }
            __proto__: Object
                constructor: function Object() { [native code] }
                greet: "hello"
*/


// -------------------------
let obj = Object.create(null);
console.log(obj);


// ---------------------------first-class functions ---------------------------
// store function in a variable
// use function as a variable
// pass function as a parameter
// return function from another function

let af = function() {
    console.log('hello');
}
af();

function sum(num1, num2, fn) {
    console.log(num1 + num2);
    console.log(fn());
}
sum(5,4, function() {
    return 'Function is executed';
});

function done() {
    return 'Function is executed';
}
sum(5,6, done);                // pass the name of the function as a variable

// ---------------------
let scores = [55, 35, 87, 45];

function checkResult(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

function passOrFail(score) {
    return score >= 51;
}

function calcDiffer(score) {
    return score - 51;
}

console.log(checkResult(scores, passOrFail));
console.log(checkResult(scores, calcDiffer));

// return function from another function ------------------------------------
function finalResult(score) {
    if (score >= 81) {
        return function(name) {
            console.log(name + ', you passed an exam and you are student of State Uni');
        }
    } else if (score >= 51) {
        return function(name) {
            console.log(name + ', you passed an exam and you are student of college');
        }
    } else {
        return function(name) {
            console.log(name + ', you failed');
        }
    }
}
let result1 = finalResult(77);
console.log(result1('John'));

let result2 = finalResult(44);
console.log(result2('Jane'));

console.log(finalResult(96)('Mary'));


// ---------------------------- IIFE ------------------------------------------
// Immediately Invoked Function Expression is a function that runs as soon as it is defined

// Global Execution Context: c1 = 20;
// Local Execution Context: function a1   new variable c1 = 'from function a1';
// Local Execution Context: function b1   new variable c1 = 'from function b1';
function a1() {
    let c1 = 'from function a1';
    return c1;
}
let b1 = function() {
    let c1 = 'from function b1';
    return c1;
}

let c1 = 20;
console.log(c1);
console.log(a1());
console.log(b1());

// IIFE can be called only once --------------------
(function() {
    console.log('Hello');
})();

(function(name) {
    console.log('Hello '+name);
})('Jane');

// --------
let normalf = function() {
    console.log('Hi normalfunc');
    return 'Hello normalfunc';
}();
console.log(normalf);     // Hello normalfunc

// --------------------------- closure ------------------------------------------
// function has always access to the variables of its outer function even after the execution
// context of the outer function is finished

function calc(num1) {
    let num2 = 10;
    return function(num3) {
        let sum = num1 + num2 + num3;
        console.log(sum);
    }
}
let add = calc(5);
console.log(add(15));

// ------
function closureA() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}
let bc = closureA();
console.log(bc);

bc[0]();
bc[1]();
bc[2]();

// use IIFE ----------
function closureB() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push((function() {
            console.log(i);
        })());
    }
    return arr;
}

closureB();

// --------------------------- call(), apply(), bind() -------------------------------------
let person = {
    firstname: 'John',
    lastname: 'Smith',
    fullname: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

let nick = {
    firstname: 'Nick',
    lastname: 'Doe'
};

console.log(person.fullname.call(nick));

let definePerson = function(age, job) {
    console.log(this.fullname() + ' is ' + age + ' years old and he is a ' + job);
};

// definePerson(28, 'developer');  // Error

// call method invokes the function at the same time ----------
definePerson.call(person, 28, 'developer');

// apply method: arguments should be in an array, invokes the function at the same time ---------
definePerson.apply(person, [38, 'designer']);

// bind method creates a new copy of the function, not invokes the function! ----------

// let getPerson = definePerson.bind(person);
// getPerson(19, 'student');

// let getPerson = definePerson.bind(person, 19, 'student');
// getPerson();

let getPerson = definePerson.bind(person, 35);
getPerson('musician');
getPerson('driver');


// ----------------- project: quiz app --------------------------



