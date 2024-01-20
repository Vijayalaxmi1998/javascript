
const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];

console.log(`---------------------------Step 1---------------------------------------------`);
console.log(`Add 10 into each element and log new array result on console`);
const arrayTransformed = arrayNumber.map( (currentValue) => {
    return currentValue+10;
} )

console.log(arrayTransformed);

console.log(`---------------------------Step 2---------------------------------------------`);
console.log(`Cube the each array element`);
const cubeArray= arrayNumber.map((currentValue)=>{
    return currentValue*currentValue*currentValue;

})

console.log(`Cube of each element is:\n`,cubeArray);

console.log(`---------------------------Step 3---------------------------------------------`);
console.log(`Add the Index value into its corresponding each array element`);
const addArray=arrayNumber.map((currentValue,index)=>{
return currentValue + index;
})

console.log(addArray);

console.log(`-----------------------------------------------------------------------------`);





