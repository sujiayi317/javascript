function greetPerson(name: string) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }else{
        greet = "Hi there";
    }
    console.log(greet);
}

greetPerson("Chand");

var a=1;
var b=2;
if (a === 1){
    var a=10;        // var: function scope
    let b=20;        // let: block scope
    console.log(a);  // 10
    console.log(b);  // 20
}
console.log(a);      // 10
console.log(b);      // 2


var c=1;             // var allow redeclare
var c=2;

let d=1;             // let does not allow redeclare
