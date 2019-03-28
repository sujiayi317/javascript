
// class is just special functions, but class is not hoisted

// class Person{
//     greet(){}
// }

// let ps = new Person();

// employeefunc();
// function employeefunc(){}
// employeefunc();

// console.log(typeof Person);

// // adding a method to a class === adding a method to the prototype property
// console.log(ps.greet === Person.prototype.greet);

//---------------------------------------------------------------------
// class body can contain only methods not properties
// there're 3 types of methods:
// 1. constructor method--is called during object creation
// 2. static method--can be called without instanciating the class
// 3. prototype method--can be called with each object
class Person0{
    constructor(name:string){
        this.name = name;
        console.log(this.name + " Constructor");
        
    }
    
    static staticMethod(){
        console.log("Static Method");
        
    }

    greetPerson(){
        console.log("Hello "+ this.name);
        
    }
}

let ps = new Person0("Chandler");
Person0.staticMethod();
ps.greetPerson();

//---------------------------------------------------------------------
// class inheritance
class Person{
    constructor(name){
        console.log(name + " Person constructor");
        
    }

    getID(){
        return 10;
    }
}

// extends parentclass
// class Employee extends Person{
// }

// the parent class constructor needs to be called before the subclass constructor
class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name + " Employee constructor");
        
    }

    getID(){
        // return 50;
        return super.getID();
    }
}

let e = new Employee("Bob");
console.log(e.getID());

