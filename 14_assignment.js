function removeDuplicate(arr) {
  let uniqueArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (uniqueArray.indexOf(arr[index]) === -1) {
      uniqueArray.push(arr[index]);
    }
  }
  return console.log( uniqueArray);
}

removeDuplicate([11,3,4,11,4,7,3])
let array=[1,2,3,4,5,8];
console.log(array.indexOf(8));
console.log(array.includes(100));
let array1=[];
console.log(array1.indexOf(11));
console.log(array.indexOf(111));

console.log(`\n------------------------------------------------------------------------------------------------`);

function lastFirstCharCapital(str) {
  let words=str.split(" ");
  for(let i=0; i < words.length; i++){
    let first=words[i][0];
    let last= words[i][words[i].length-1];
    first=first.toUpperCase();
    last=last.toUpperCase();
    words[i]=first+words[i].slice(1,-1)+last;
   // console.log(words[i]);
  
  }
  words= words.join(" ");
  return words;
}
let sentence="how are you mate";
console.log(`Given word is: ${sentence}`);
let afterChange=lastFirstCharCapital(sentence);
console.log(`\nAfter using Function: ${afterChange}`);



