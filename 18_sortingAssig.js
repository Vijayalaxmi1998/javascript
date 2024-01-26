const arrayRollNumbers=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
 console.log(`-------------------------Step 1-----------------------------------------------------------------`);

console.log(`given Array is:    ${arrayRollNumbers}`);
const reverseArray=arrayRollNumbers.reverse()
console.log(`after Reverse the Array is:     ${reverseArray}`);

console.log(`-------------------------Step 2-----------------------------------------------------------------`);

console.log(arrayRollNumbers.sort());

console.log(`-------------------------Step 3-----------------------------------------------------------------`);

arrayRollNumbers.sort((a,b) =>{
    return a<b? -1: 1;
})

console.log(arrayRollNumbers);

console.log(`-------------------------Step 4-----------------------------------------------------------------`);
console.log(`Greatest Number in the Array`);
console.log(arrayRollNumbers[arrayRollNumbers.length-1]);

console.log(`-------------------------Step 5-----------------------------------------------------------------`);

console.log(`Smallest Number from String`);

console.log(arrayRollNumbers[0]);

console.log(`-------------------------Step 6-----------------------------------------------------------------`);
// let uniqueArray=[];
// console.log(arrayRollNumbers);
// for (let index = 0; index < arrayRollNumbers.length; index++) {
//     const element = arrayRollNumbers[index];
//     if (uniqueArray.indexOf(arrayRollNumbers[index]===-1)) {
//        uniqueArray= uniqueArray.push(arrayRollNumbers[index])
//     }
//     console.log(uniqueArray);
// }

function removeDuplicate(arr) {
    let uniqueArray = [];
    for (let index = 0; index < arr.length; index++) {
      if (uniqueArray.indexOf(arr[index]) === -1) {
        uniqueArray.push(arr[index]);
      }
    }
    return console.log( uniqueArray);
  }
let array=arrayRollNumbers;
removeDuplicate(array);








