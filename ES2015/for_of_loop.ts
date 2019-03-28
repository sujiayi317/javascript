

let colors = ['Red', 'Blue', 'Green'];

for (let index in colors){
    console.log(colors[index]);
}


// use for of loop to loop over iterables--array
for (let color of colors){
    console.log(color);
}


// to loop over iterables--string
let letters = "ABC";

for(let letter of letters){
    console.log(letter);
}