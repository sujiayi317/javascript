//// export directly
// export let fname = "Chandler";
// export let lname = "Bing";


//export multiple items in {}
let fname = "Chandler";
let lname = "Bing";

let obj = {
    name: "Joey"
}
console.log('Module B loaded');
export {fname, lname, obj}


//---------------------default export------------------
// if only one item is aimed to be exported, use default key word
// export default fname;