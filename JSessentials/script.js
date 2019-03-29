//---------------------------------- BASICS ---------------------------------
// javascripte syntax, variable, data types operators, type coercion, conditional statements ...
console.log("Hello world");

let firstName = 'John';

firstName = 'Marry';

console.log(firstName);

// primitive data types are not objects:
// String Number Boolean undefined null

let num1 = 5+5*5;
let num2 = (5+5)*5;

let a = null;
    
console.log(a, num1,num2);

// == use type coercion
let m = 5;
let n = '5';
console.log(m == n);      // true
console.log(m != n);      // false
console.log(m === n);      // false

// type coerce
let t1 = 10 + '5';
console.log(t1);            // 105 string concatination
let t2 = 5 + 10 + 'b';
let t3 = 'b' + 5 + 10;
console.log(t2, t3);        // 15b b510

// false false false true true
console.log(5===5===5, true===5, true==5, true==1, false==0); 

// conditional statement -- evaluate to true or false
// if else statement
let myChild = 'Alexis';
let gender = 'male';

if(gender === 'male') {
    console.log(myChild + ' is my son');
}else{
    console.log(myChild + ' is my daughter')
}

// if.. else if.. statement
let prof = 'instructor';

if (prof === 'instructor') {
    console.log(prof + ' teaches students');
} else if (prof === 'doctor') {
    console.log(prof + ' treats people');
} else if (prof === 'musician') {
    console.log(prof + ' creates the music');
} else {
    console.log('Professions do not match');
}

// logical operators
// && || ! -- and or not
if (5 === 5 && 4 === 4) {
    console.log('Condition is true');
} else {
    console.log('Condition is false');
}

let scoreofJohn = 80;
let scoreofNick = 45;
let pass = 51;

if (scoreofJohn >= pass && scoreofNick >= pass) {
    console.log('Both students passed');
} else if (scoreofJohn >= pass || scoreofNick >= pass) {
    console.log('One of the students passed');
    if (scoreofJohn > scoreofNick) {
        console.log('and it is John with '+scoreofJohn+' points');
    } else {
        console.log('and it is Nick with'+scoreofNick+' points');
    }
} else {
    console.log('Both students failed')
}

//---------------------------------- INTERMEDIATE LEVEL ----------------------
// functions, arrays, objects, loops, date object, application(digital clock project)

// functions statement
function passExam(name, score) {
    let passUni = 71;
    let passColl = 51;
    if (score >= passUni) {
        console.log(name + ' has enrolled in University with ' + score + ' points');
    } else if (score >= passColl) {
        console.log(name + ' has enrolled in College with ' + score + ' points');
    } else {
        console.log(name + ' has failed');
    }
}

function calcScore(quizScore, assayScore) {
    let score = quizScore + assayScore;
    return score;
}

passExam('John', calcScore(40, 35));
passExam('Mary', 65);
passExam('Bob', 45);



// function statement
function add(a,b) {
    console.log(a+b);
}
add(5,10);

// function expression--anonymous function(not having name)
let sum = function(a,b) {
    console.log(a+b);
}

sum(10,15);


// array literal
let arr = [
    'John', 
    'Bob', 
    'Mary', 
    10, 
    true, 
    [1,2,3],
    function(name) {
        return 'Hello '+name;
    }
];

console.log(arr[0]);
console.log(arr[5][2]);
console.log(arr[6](arr[0]));

// array constructor
let arr1 = new Array(1, 'John', false);
console.log(arr1);

// array methods
let colors = ['white', 'black', 'red'];

colors[1] = 'green';
colors.push('blue');       // add item at the end of array
colors.pop();              // remove item at the end of array

colors.shift();            // remove item at the beginning of array
colors.unshift('purple');  // add item at the beginning of array

colors.indexOf('red')
console.log(colors);

console.log(colors.indexOf('red'));            // 2
console.log(colors.indexOf('yellow'));         // -1 : item not found

if (colors.indexOf('blue') === -1) {
    colors.push('blue');
    console.log(colors);
}

// objects: collections of related variables and functions, which are represented as name/value pairs
// in JavaScript almost everything is an Object
// properties + methods

// object construction method

let person = new Object();

person.firstname = 'John';
person.lastname = 'Smith';
person.son = new Object();
person.son.name = 'Nick';
person.son.age = 5;

console.log(person);
console.log(person.firstname);
console.log(person['lastname']);

// literal notation
let personA = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    daughter: {
        name: 'Mary',
        age: 5
    },
    myFunc: function(daughterName, fatherName, daughterAge) {
        console.log(daughterName + ' is a daughter of '+ fatherName + ' and she is ' + daughterAge +
        ' years old.');
    }
};

console.log(personA);
console.log(personA.daughter.name);

personA.myFunc(personA.daughter.name, personA.firstname, personA.daughter.age);


// loops
let namearr = ['John', 'Nick', 'Bob', 'Michael', 'Mary'];
// for loop    -- initialization; condition; increment
for (let i = 0; i < namearr.length; i++) {
    if(namearr[i] === 'Bob') {
        console.log(namearr[i] + ' is my brother');
        // break;
        continue;
    }
    console.log(namearr[i]);
}

// while loop
let i = 0;

while(i <= 10) {
    i++;
    console.log(i);
}

// do..while loop
i = 0;

do {
    i++;
    console.log(i);
} while(i <= 10);


// date object methods:
// getDate()         Get the day as a number(1-31)
// getDay()          Get the weekday as a number (0-6)
// getFullYear()     Get the four digit year (yyyy)
// getHours()        Get the hour (0-23)
// getMilliseconds() Get the milliseconds (0-999)
// getMinutes()      Get the minutes (0-59)
// getMonth()        Get the month (0-11)
// getSeconds()      Get the seconds (0-59)

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();

date.setFullYear(1990);
date.setMonth(11);

console.log(date);
console.log(year);
console.log(month);

// ........................................code task

let unistudents = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
]

let scores = [91, 81, 71, 61, 51];

let degrees = ['A', 'B', 'C', 'D', 'E'];

function calcSum(score1, score2) {
    let sum = score1 + score2;
    return sum;
}

function calcFinal() {
    for(let i = 0; i < unistudents.length; i++) {
        unistudents[i].sum = calcSum(unistudents[i].score1, 
                                     unistudents[i].score2);
        if(unistudents[i].sum >= 51) {
            console.log(unistudents[i].name + ' passed final exam successfully: ');
        
            for (let x = 0; x < scores.length; x++) {
                if(unistudents[i].sum >= scores[x]) {
                    console.log('He has ' + unistudents[i].sum + ' points and he got diploma with degree '
                    + degrees[x]);

                    console.log('---------------');

                    break;
                }
            }
        } else {
            console.log(unistudents[i].name + ' got ' + unistudents[i].sum + 
            ' points, has failed and has to try next year')
            console.log('---------------');
        }

    }

    // console.log(unistudents)

}

calcFinal();

// console.log('---------');

// for( let i = 100; i < 105; i++) {

//     for(let x = 0; x < 10; x++) {
//         console.log(x);
//     }
//     console.log(i);
// }

//.............................................................................

// ----------------------------------- behind the scenes ---------------------------------------
// global execution context, global object, execution context, execution stack, scope chain, hoisting

// execution context is a container, which manages the code that is currently running
// in most cases, it is created by functions

// global execution context is a base execution context, that manages the code which is not inside a function
// it is created immediately when the page is loaded
// global object: window object (an opened window in the browser)

// this refers to object at global level -- window object
// let name = 'John';
// then the global window object has a property: window.name = 'John', also this.name is 'John'
// function a() {return 'Hello'}
// then the global window object has a method: window.a() is the same as a(), also this.a()

// let obj = {
//     name: 'Nick',
//     b: function() {
//         return 'Hi';
//     }
// }


function aa() {
    let name = 'John';
    bb();
    console.log(name);
}

function bb() {
    let name = 'Bob';
    cc();
    console.log(name);
}

function cc() {
    let name = 'Nick';
    console.log(name);
}

aa();     //Nick Bob John


// scope refers to the visibility or accessibility of variables and functions
// local scope is not accessible from outer scope -- scope chain

// global scope: nb1
let nb1 = 5;

function a1() {
    // local scope: nb2
    let nb2 = 10;
    
    function b1() {
        // local scope: nb3
        let nb3 = 15;
        console.log(nb3+nb2+nb1);
    }

    b1();
}

a1();

// hoisting: in creation stage, variables and function declarations are put into memory space

let a2 = 10;

function b2() {
    return 20;
}
console.log(a2);
console.log(b2());

// if(true) {
//     let a3 = 14;
// } else {
//     let b3 = 16;
// }
// console.log(a3);
// console.log(b3);

// object vs primitives
let a4 = 10;
let b4 = a4;
a4 = 20;
console.log(b4);            // 10

// object
let c4 = {
    name: 'John'
};
let d4 = c4;          // d4 and c4 become the reference of the same object
c4.name = 'Nick'
console.log(d4.name)  // Nick

c4 = {                // c4 now becomes the reference of the newly create object
    name:'Bob'
};
console.log(d4.name)  // Nick


// ..................................  this  .......................................
// Local(function) execution context, this === window
function a5() {
    console.log(this);                           // window
    console.log(this === window);                // true

    function b5() {
        console.log(this);                       // window
        console.log(this === window);            // true => this always refers to global window object
    }
    b5();
}
a5();               


// call method in objects => local(function) execution context is created => 'this' is defined, refering
// to the object per, this === per
let per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullName: function() {
        let self = this;
        // return per.firstname + ' ' + per.lastname;
        console.log(this === per);               // true
        console.log(this.firstname + ' ' + this.lastname);

        function greet() {
            console.log('this here is '+ this);  // this here is [object window]
            console.log(this === window);        // true
            console.log('Hi ' + self.firstname); // Hi undefined => Hi John
        }
        greet();
    }
}

let per1 = {
    firstname: 'Nick',
    lastname: 'Doe'
};
// borrow a method from another object's method
per1.getFullName = per.getFullName;

per.getFullName();                               // John Smith
per1.getFullName();                              // Nick Doe

//-------------------------------- Document Object Model ---------------------------------------------
// DOM Document Object Model
// manipulate on individual or multiple elements, DOM styles, DOM classes, events, 
// get/set attributes, DOM navigation, note manager app

// DOM is a cross-platform and language-independent model for representing and interacting with elements
// in HTML documents.

// DOM is neither part of HTML nor part of JavaScript

// querySelector('selector')
// return the first element that matches a specified CSS selector in the document
// String argument always must follow CSS syntax

//let el = document.querySelector('ul')
//el.textContent = 'Hello world'
//el = document.querySelector('#search-note')
//el = document.querySelector('ul li:nth-child(2)')
//el.querySelector('p .fa-times')


// getElementsByClassName('class')
// returns a collection of all elements in the document with specified class name
// collection is not an array

//let icons = document.getElementsByClassName('fa')
//icons[0]

let icons = document.getElementsByClassName('fa');

for(let i = 0; i < icons.length; i++) {
    console.log(icons[i]);
}








