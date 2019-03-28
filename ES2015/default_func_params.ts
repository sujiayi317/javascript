// let getValue = function(value=10, bonus=5){
//     console.log(value+bonus);
// };
// getValue();
// getValue(20);
// getValue(20, 30);
// getValue(undefined, 30); // 40


// use variables to assign default function parameters
let percentBonus = 0.1;
let getValue = function(value=10, bonus=value*percentBonus){
    console.log(value+bonus);
};
getValue();                  // 11
getValue(20);                // 22
getValue(20, 30);            // 50
// getValue(undefined, 30); // 40


// use function to assign default function parameters
let percentBonus1 = () => 0.1;
let getValue1 = function(value=10, bonus=value*percentBonus1()){
    console.log(value+bonus);
    console.log(arguments.length);
};
getValue1();                  // 11   0
getValue1(20);                // 22   1
getValue1(20, 30);            // 50   2
// getValue(undefined, 30); // 40