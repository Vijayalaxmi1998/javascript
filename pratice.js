const arr=['apple','banana','chery']

const iterator=arr.values();
console.log(iterator);

for (const element of arr) {
    console.log(element);
    
}

console.log(`\nusing for in loop`);
for (const index in arr) {
    console.log(arr[index]);
    
}

console.log(`\nusing for loop`);
let str="";
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    str+=element+" ";
    
    
}
console.log(str);
arr.reverse();
console.log(arr);
let str1=arr.join(" ")

console.log(str1);

let arr1=str1.split("");
console.log(typeof arr1);

// reverse the string using split and join method
let name="vijayalaxmi";
let arr2=name.split("");
arr2.reverse();
let name2=arr2.join("")
console.log(name2);

//reverse the string using for loop
function reverseString(string){
let fullname=string;
let reverse="";
for (let index = fullname.length-1; index >= 0; index--) {
    const element = fullname[index];
    if(element!=" "){
    //console.log(element);
    reverse=reverse.concat(element)
    }  
}
return console.log(reverse);
}
reverseString(" I am sorry")

console.log('WAP to find the even positioned value');
//if ask positioned then use for in loop and if ask value element the use for of loop.
const array=[4,6,7,8,3,2];
for (const key in array) {
    if(key%2==0){
        console.log(array.at(key));
    }
    
}

console.log(`How to create the new array object from existing object`);
const arrayOriginal=[1,2,3,4,5,6,77,88];
let copyArray=[...arrayOriginal];
console.log(copyArray);
console.log(arrayOriginal);

//The spread operator ...is used to expand an array
let name1=["vijaya","swati","shree","Rutuja","Jyoti"];
console.log(name1);
console.log(...name1);
 
let arr3=[1,3,5];
let arr4=[10,20,30];
console.log(arr3.concat(arr4));
console.log([...arr3,...arr4]);

console.log(`====================Set====================================`);
const unique=new Set();
unique.add(1);
unique.add(2);
unique.add(3);
unique.add(10);
unique.add(10)
console.log(unique);
console.log(unique.size);
//console.log(unique.clear()); clear the all value at the set
unique.delete(3)
console.log(unique);   //change in original set
console.log(unique.has(10));

if (unique.has(11)) {
console.log(`Given array contain 11 value`);    
} else {
    console.log(`Given array does'nt contain 11 value`);    
    
}
console.log(`Type of set is 0bject`);
console.log(typeof unique);

var string="vijayalaxmi";
for (const iterator of string) {
    console.log(iterator);
    
}

var array23=[1,2,3,3,4,6,6];
let removeduplicate=[...new Set(array23)];
console.log(removeduplicate);
for (const iterator of removeduplicate) {
    console.log(iterator);
    
}



let array100=[4,5,4,5,8,5,7,8,9,7,8];
for (const iterator of array100) {
    
        console.log(iterator);
        
    }
    

    
console.log(`---------------Map Collection-----------------------------`);
let map=new Map();
map.set("name","Vijaya");
map.set("lastName","Kaleguddi");
map.set("CGPA",6);
console.log(map);
console.log(map.get("name"));

let developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]
}

// for (const iterator of developer) {
//     console.log(iterator);
    
// }

for (const key in developer) {
   // if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
   // }
}

