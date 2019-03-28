
// spread operator in function call takes an array and spread it into elements


let displayColors = function(message:string, ...colors:any){

    console.log(message);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let msg = "List of Colors";

let colorArray = ['Orange','Yellow','Indigo'];

// displayColors(msg, 'Red');
// displayColors(msg, 'Red','Blue');
// displayColors(msg, 'Red','Blue','Green');
displayColors(msg, ...colorArray);
