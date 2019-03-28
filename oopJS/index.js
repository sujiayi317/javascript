

// // ------------  Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);


// // ------------  Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// // const Circle1 = new Function('radius', `
// // this.radius = radius;
// // this.draw = function() {
// //     console.log('draw');
// // }
// // `);

// // const circle = new Circle1(1);

// // in JS, functions are objects!
// // "this" will reference {}
// Circle.call({}, 1);
// Circle.apply({}, [1]);


// // if without new operator, "this" will point to the global object, which is window
// // the new operator will internally create an ampty object and pass it as the 1st arg to .call() 
// // this object will determine the context of "this"
// const another = new Circle(1);   



// let x = {};            // let x = new Object();
// // built-in constructors: (Every object has a constructor property, 
// // which references the function that was used to create that object)
// new String();            // '', "", ... string literals are simpler than using constructor
// new Boolean();           // true, false boolean literals
// new Number();

//-------------------------------------------------------------------------------------------------
// Value Types: Number, String, Boolean, Symbol, undefined, null ----primitives
// Reference Types: Object, Function, Array                      ----objects

// let x = 10;
// let y = x;           // x and y are independent
// x = 20;

// *** Primitives are copied by their value ***
// *** Objects are copied by their reference ***
// let x = { value: 10};
// let y = x;              // x and y are pointing to the same object in memory
// x.value = 20;

//---------------------------------------------------------------
// let number = 10;

// function increase(number) {
//     number++;             // outside of the function, this number is out of scope
// }

// increase(number);
// console.log(number);      // 10 because this number is different from the number in the function

//............................................
// let obj = { value: 10 };

// function increase(obj) {     // this local param will point to the same obj defined above
//     obj.value++;             // we're not dealing will 2 independent copies
// }

// increase(obj);
// console.log(obj);     // 11 because when we call func increase(obj), obj is passed by its reference


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// // dynamically add properties to an object
// circle.location = { x: 1 };

// const propertyName = 'center location'
// circle[propertyName] = { x: 1};
// circle['location'] = { x: 1};

// // dynamically delete properties to an object
// delete circle['location'];

//---------------------------------------------------------------------------------------

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//     console.log('Circle has a radius.')

//----------------------------------------------------------------------------------------
// // abstract: hide details, show essentials
// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0};

//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     };
//     this.draw = function() {
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },

//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location.');
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// circle.getDefaultLocation = 1;
// circle.draw();

//----------------------------------------------------------------------------------------

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

// const sw = new Stopwatch
// sw.duration
// sw.start()
// sw.stop()
// sw.duration
// sw.reset()