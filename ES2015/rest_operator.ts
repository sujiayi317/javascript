
// rest operator in function definition takes an array and spread it into elements


let displayColors1 = function(message:string, ...colors:any){

    console.log(message);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let msg1 = "List of Colors";

displayColors(msg1, 'Red');
displayColors(msg1, 'Red','Blue');
displayColors(msg1, 'Red','Blue','Green');

