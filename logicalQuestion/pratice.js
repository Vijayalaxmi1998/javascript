// 1. Write a function that finds the maximum number in an array.
let array=[35,11,44,8,19,91];
array.sort((a,b)=>{
    return a<b?-1:1;
});
console.log(array[array.length-1]);
console.log(`smalest element from the array:${array[0]}`);