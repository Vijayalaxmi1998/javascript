// console.log("I am Vijayalaxmi");

// function name(){
//     var lastName="My last Name is Kaleguddi";

//     console.log(lastName);
// }


// //setTimeout(name,10000);

// console.log(`-----------Closure function-----------------`);

// function name11(){
//     console.log('vijayalaxmi');
//     function lastName() {
//         console.log("Kaleguddi");
//         }
//     return lastName();  
// }
// name11();

// console.log(`-------------callback----------------------`);
// function eduction(func){
//     console.log("M.SC");
//     return func();
// }

// eduction(name11)

// console.log(`------------------Spread Operator---------------------------`);
// function display(...args){
//     console.log(args);
// }

// display(20,30,10);

// function name1(arg){
// console.log("hello World");
// }

// name1(5);   

// function noArg() {
//     console.log("Hello I am Vijayalaxmi");
// }

// noArg();
// argOrReturn("Snehal");
// function argOrReturn(agr){
//     let name="vijayalaxmi";
//     console.log(name);
//     console.log("today was group discussion");
//     return console.log(`given argument is ${agr}`);
    
// }


// argOrReturn(10);

// function noArgwithReturn() {
//     return console.log("HELLO");
    
// }

// noArgwithReturn();

// let lastname=function(){
// console.log("Kaleguddi");
// };
// lastname();

// let CollegeName=() =>{
// console.log("R.R.College Jath");
// }
// CollegeName();
let globalVar=500;
function outerFun(){
    let localVar=400;
    console.log(globalVar);
    console.log(localVar);
    console.log(ownVar);
    function innerFun() {
        let ownVar=300;
        
        
    }
    return innerFun;
}

outerFun()();

function function1(arg){
    console.log("My First name is Vijayalaxmi");
    
}

function function2(){
    console.log("My last name is Kaleguddi");
    
}

function1(function2);
//function2(function1);