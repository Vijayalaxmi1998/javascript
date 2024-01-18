console.log("------------------------Step 1-----------------------------------------------");
const show=()=>{
    console.log(`Good Morning, Today is Thursday`);
}
show();

console.log("------------------------Step 2-----------------------------------------------");

const multiply=(n1,n2,n3=1)=>{
    console.log(`Multification of 3 number is: ${n1*n2*n3}`);

}
multiply(5,5,2);
multiply(10,4);

console.log("------------------------Step 3-----------------------------------------------");
const add = (n1,n2,n3,n4,n5) => {
    return n1 + n2 + n3 + n4 + n5;
}
const returnValue = add(100,100,200,349,756);
console.log(`Addition of number : ${returnValue}`);
const returnValue1 = add("I am"," learning ","ES6 ","feature ","in depth");
console.log(`Addition of string: ${returnValue1}`);

