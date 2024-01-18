
const add = (n1,n2,n3,n4,n5) => {
    return n1 + n2 + n3 + n4 + n5;
}
const returnValue = add(100,100,200,349,756);
console.log(`Addition is: ${returnValue}`);
const returnValue1 = add("I am"," learning ","ES6 ","feature ","in depth");
console.log(`Addition is: ${returnValue1}`);

for (let index = 5; index <=15; index++) {
    console.log(index);
    
}
console.log(`----------------------------------------------------`);
for (let index = 50; index >= 40; index--) {
    console.log(index);
    
}

console.log(`----------------------------------------------------`);
for (let index = 0; index <=15; index++) {
    if (index%2==1) {
        console.log(index);
    }
    
}

console.log(`----------------------------------------------------`);
for (let index = 5; index <= 50; index++) {
    if (index%5==0) {
        console.log(index);
    }
    
}

console.log(`----------------------------------------------------`);
for (let index = 100; index >=10 ; index--){
    if(index%10==0){
        console.log(index);
    }  
}

console.log(`----------------------------------------------------`);
console.log(`--------------Using While Loop--------------------------------------`);
var i=5;
while (i<=15) {
    console.log(i);
    i++;
    
}

console.log(`----------------------------------------------------`);
var i=50;
while (i>=40) {
    
    console.log(i);
    i--;
}

console.log(`----------------------------------------------------`);

function vowels(str){
    for (var index = 0; index < str.length; index++) {
        if (str[index]=="a"||str[index]=="e"||str[index]=="i"||str[index]=="o"||str[index]=="u") {
         console.log(str[index]);   
        }
        
    }
}
vowels("vaishali");

console.log(`----------------------------------------------------`);




