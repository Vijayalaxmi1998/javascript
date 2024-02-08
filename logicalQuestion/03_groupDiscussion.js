// //1.remove duplicate elements of array
// let array=[11,11,85,66,55,8,6,8,86]
// //using set we can remove the element of array
// let set1=new Set(array);
// console.log(set1);
// console.log(array.length);

// //another method to remove duplicate element
// console.log(array);
// let uniqueArray=[];
// for (let index = 0; index < array.length; index++) {
//     if(uniqueArray.indexOf(array[index])==-1){
//         uniqueArray.push(array[index]);
//     }
    
// }
// console.log(uniqueArray);

//2.Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
// let titleWord="introduction of javaScript";
// let array1=titleWord.split(" ");
// let emptyArray=[];
// console.log(array1);
// for (let index = 0; index < array1.length; index++) {
//     emptyArray.push(array1[index][0].toUpperCase()+array1[index].slice(1));
    
// }
// console.log(emptyArray);
// titleWord=emptyArray.join(" ")
// console.log(titleWord);

// //3.merge to arrays 
// let array3=[1,2,3,6];
// let array4=[11,22,33,44];

// //using spread method
// let arrays=[...array3,...array4];
// console.log(arrays);

// let conArray=array4.concat(array3);
// console.log(conArray);

// //using + sign
// let addArray=array4+","+array3;
// console.log(addArray);

// // push method
// let pushArray=array4.push(...array3)
// console.log(array4);

// //4.Implement a function that flattens a nested array into a single-dimensional array. 
// let nestArray=[1,2,[4,5,[8,9]]]
// console.log(flatten(nestArray));

// let array=[11,33,55,77,11,99,33];
// let uniqueArray=[];
// for (let index = 0; index < array.length; index++) {
//     if(uniqueArray.indexOf(array[index])==-1){
//         uniqueArray.push(array[index])
//     }
// }
// console.log(uniqueArray);

// //2.Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// let string="indroduction of javascript and web development";
// console.log(string); 
// let array1=string.split(" ");
// let array2=[]
// for (let i = 0; i < array1.length; i++) {
//     array2+=array1[i].charAt(0).toUpperCase()+array1[i].slice(1,-1)+array1[i][array1[i].length-1].toUpperCase()+" ";
    
// }
// console.log(array2);

// date 06/02/2024
// 1. Write a function that finds the maximum number in an array.
let array4=[11,55,8,89,106,78]
//console.log(array4);
function maxArray(arr){
    console.log('given array is',arr);
    arr.sort((a,b) =>{
        return a>b?-1:1;
     })

     return console.log(`max value of the Array is:${arr[0]}`);
};
maxArray(array4)

// 2.Calculate the average of the numbers in an array of numbers.
function avg(arr){
    let array=arr;
    console.log(`\ngiven Array is:`);
    console.log(array);
    let sum=0;
    let length=array.length;
    for (let index = 0; index < array.length; index++) {
        sum=sum+array[index];
        
    }
    console.log(`sum of given array is ${sum}`);
    let avg=sum/length;
    console.log(`avarage of given array is ${avg.toFixed(2)}`);
}
let arr=[1,2,3,4,5];
avg(arr);
avg(array4)


// 3.Write a program that converts a string to an array of characters.
let string="vijayalaxmi";
console.log(`given string is "${string}"`);
let stringToArray=string.split("");
console.log(stringToArray);
console.log(string.length);
// 4.Return the number of vowels in a string.
 let count=0;

function countvowels(str){
    let string=str.toLowerCase();
    console.log(`given String is: "${str}"`);
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        //console.log(element);
        if(element=="a" || element=="i" ||element=="o" ||element=="u" ||element=="e" ){
            count=count+1;
        }
    }
    console.log("In given string vowels count is:",count);
}
countvowels("KAleguddi")

// 5.Write a function that sorts an array of strings in alphabetical order.
let array=["vijaya","sneha","Anushri","Snehal","Vijaya","bhageshree"];
let str=array.join(" ").toLowerCase();
console.log(str);
array=str.split(" ")
array.sort();
console.log(array);

//Write a function that returns all prime number up to to a given limit.
function isPrime(num){
    if(num<=1){
        return console.log(`given num is not prime ${num}`);
    }
    for (let i = 2; i < num; i++) {
        if(num%i===0){
            return console.log(`given num is not prime ${num}`);
        }
        
    }
    return console.log(`given num is prime ${num}`);
};

isPrime(1);
isPrime(2);
isPrime(-1);
isPrime(10);

//factorial program

function factorial(num){
     if (num==0||num==1) {
         return 1;
     }
     if (num==null||num==undefined||num<=0||isNaN(num)) {
      return `invalid input`
     }

     let res = 1;
     for (let index = 1; index <=num; index++) {
       res=res*index;
      
     }
     return res;
}

let fac= factorial(10)
console.log(fac);

//
let string1="I am vijayalaxmi";
let array1=string1.split("");
string1=array1.reverse().join("");
console.log(string1);
console.log(string1.split(" ").join(""));

//spread opr -remove duplicate
const arr1 =[1,2,3,1,2]
const ar =[...new Set(arr1)]
console.log(ar);

// function removeDuplicateCharacters(string) {
//     return Array.from(new Set(string)).join("");
// }
// console.log(removeDuplicateCharacters("hello"));

function removeDuplicateCharacters(string) {
    return Array.from(new Set(string)).join("");
}
console.log(removeDuplicateCharacters("hello"));
function removeDuplicates(str) {
const uniqueChars = [];

// Iterate through each character in the string
for (let i = 0; i < str.length; i++) {   // Check if the current character already exists in the array
 if (!uniqueChars.includes(str[i])) {
   // If it doesn't exist, add it to the array
   uniqueChars.push(str[i]);
 }
}

// Join the unique characters back into a string
return uniqueChars.join("");
}
