
let firstname = "Chandler";
let lastname = "Bing";

// let person = {
//     firstname: firstname, 
//     lastname: lastname
// };

// when the property name is the same as the var name: use shorthand notation
let person = {
    firstname, 
    lastname
};

console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname:string, lastname:string, age:number){
    let fullname = firstname + " " + lastname;
    return {
        firstname, 
        lastname, 
        fullname,
        // isSenior: function(){   
        // if we have a function to a property, : and function can be omitted
        isSenior(){
            return age>60;
        }
    }
}

let p = createPerson("Ross","Geller",32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());



// object property names can contain spaces within " ", and be refered in [ ]
// variable can be used as property names:
let ln = "last name"
let person1 = {
    "first name": "Chandler",
    [ln]: "Bing"
}
console.log(person1);


