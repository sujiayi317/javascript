// // import {fname, lname} from './moduleB.js'

// // console.log(` ${fname} ${lname} `);   // string templates


// // provide alias for imports and use alias
// console.log('Module A log 1')
// import {fname as f, lname as l, obj} from './moduleB.js'
// console.log('Module A log 2')
// console.log(` ${f} ${l} `);   // string templates

// // result: import module hoists to the first
// // Module B loaded
// // Module A log 1
// // Module A log 2
// //  Chandler Bing 



// // imports are read-only!
// obj.name = "Ross";
// console.log(obj.name);




//---------------------default export------------------
// no need of {} unless use alias; name doesn't have to match
// import firstname from './moduleB.js'
// console.log(firstname);

// import {default as f} from './moduleB.js'
// console.log(f);


//------------------ export function and classes

import {greet, GreetMessage} from './moduleC.js'

greet('Hello World');

let gm = new GreetMessage();
gm.greet();