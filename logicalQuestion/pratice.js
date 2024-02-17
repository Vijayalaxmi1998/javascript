'use strict';
var message="Hello";
console.log(message);

//Sperad Operator
// the spread operator... is used to expand an array or spread the elements
const fruits=["Apple","Mango","Orange","Strawberry","Grapes"];
console.log(fruits);
console.log(...fruits);

//Rest Parameter
function display(...args) {
    console.log(args);
    
}

display(20,30,10);
display(100,"vijaya");
display("I love","Javascript");

//Function default parameters
function divide(x, y=1) {
    return x/y;
    
};

console.log(divide(20,10));
console.log(divide(5));

//Destructuring: Object Destructuring, Array Destructuring

const person={
    first_name:"Askhay",
    age:25,
    grade:"BE"
}
// let first_name=person.first_name;
// console.log(first_name);
// let age=person.age;
// console.log(age);
// console.log(first_name,age);

let{ grade,age, first_name}=person;
console.log(age,first_name);
console.log(grade);

//Array Destructuring
//const fruits=["Apple","Mango","Orange","Strawberry","Grapes"];
let[fruit11,fruit2,fruit3]=fruits;

console.log(fruit3,fruit11,fruit2);

const fruitss=["Apple","Mango","Banana"];
let [fruit111,fruits222,Fruit33="Jack Fruits",fruit4="Strawberry"]=fruitss
console.log(fruit111,Fruit33,fruit4,);

//Self invoking Function or IIFE(immediately Invoked Function Expression);
(function(){
    console.log("I am Vijyalaxmi");
})();

