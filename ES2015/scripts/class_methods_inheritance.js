"use strict";
// class is just special functions, but class is not hoisted
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person0 = /** @class */ (function () {
    function Person0(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person0.staticMethod = function () {
        console.log("Static Method");
    };
    Person0.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Person0;
}());
var ps = new Person0("Chandler");
Person0.staticMethod();
ps.greetPerson();
//---------------------------------------------------------------------
// class inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + " Person constructor");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
// extends parentclass
// class Employee extends Person{
// }
// the parent class constructor needs to be called before the subclass constructor
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee constructor");
        return _this;
    }
    Employee.prototype.getID = function () {
        // return 50;
        return _super.prototype.getID.call(this);
    };
    return Employee;
}(Person));
var e = new Employee("Bob");
console.log(e.getID());
//# sourceMappingURL=class_methods_inheritance.js.map