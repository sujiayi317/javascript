

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

const obj = { prop: 0 };
obj.prop = obj.prop + 1;

console.log(obj);



// You can use const with for-of loops, where a fresh binding is created for each iteration:
const arr = ['hello', 'world'];
for (const elem of arr) {
    console.log(elem);
}
// Output:
// 'hello'
// 'world'

// In plain for loops, you must use let, however:
for (let i=0; i<arr.length; i++) {
    const elem = arr[i];
    console.log(elem);
}