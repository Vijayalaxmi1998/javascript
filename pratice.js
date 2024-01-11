console.log(`This is a globel scope Variable`);

var a=10;
let firstName="Vijayalaxmi";
const pi=3.14;
function detail() {
    console.log(`a=${firstName}, firstName:${firstName}, value of pi=${3.14}`);
}

detail()
console.log(firstName);
console.log(a);
console.log(pi);

console.log(`\n\nfunction scope Variable`);



function detail() {
    var a1=10;
let firstName1="Vijayalaxmi";
const pi1=3.14;
   console.log(`a=${firstName}, firstName:${firstName}, value of pi=${3.14}`);
}

detail();
// console.log(firstName1);
// console.log(a1);
// console.log(pi1);

console.log(`\n\nblock scope Variable`);
var b=10;
if(b==10){
    var a3=10;
let firstName3="Vijayalaxmi";
const pi3=3.14;
console.log(`a=${firstName}, firstName:${firstName}, value of pi=${3.14}`);


}

//console.log(firstName3);
console.log(a3);  // hence var function scope
//console.log(pi3);
