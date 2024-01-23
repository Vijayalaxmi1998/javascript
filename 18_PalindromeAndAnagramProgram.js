// MADAM

// const isPalindrome = function(word){

// }
// const result = isPalindrome("MADAM");
// console.log(`Given Word MADAM Is Palindrome or not: ${result}`);

// // ANAGRAM
// // 'heart' and 'earth' are anagrams.
// const str1 = 'heart'; // Sort in ascending order ==>  aehrt
// const str2 = 'earth'; // Sort in ascending order ==> aehrt

// const resultStr1 = str1.split("").sort().join("");
// const resultStr2 = str2.split("").sort().join("");
// console.log(resultStr1==resultStr2 ? true : false);

console.log(
  `----------------------------------------------------------------------------`
);

function isPalindrome1(str) {
  let word = str;
  let array = word.split("");
  array.reverse();
  //console.log(array);
  let word1 = array.join("");
  console.log(`Given word is:${word}`);
  if (word == word1) {
    console.log(`Given word is Palindrom`);
  } else {
    console.log(`Given word is non Palidrom`);
  }
}
isPalindrome1("madam");
console.log(`-----------------------------------------------------------`);
isPalindrome1("dad");
console.log(`-----------------------------------------------------------`);
isPalindrome1("hello");
console.log(`-----------------------------------------------------------`);

let anagram = function (word1, word2) {
  let str1 = word1;
  let str2 = word2;
  console.log(`given 1st string is: "${word1}"`);
  console.log(`given 2st string is: "${word2}"`);

  let array1 = str1.split("");
  let array2 = str2.split("");
  array1 = array1.reverse().sort();
  array2 = array2.reverse().sort();
  str1 = array1.join("");
  str2 = array2.join("");
  str1 === str2
    ? console.log(`given Strings are Anagram`)
    : console.log("given Strings are not Anagram");
  console.log(``);
};
anagram("Silent", "Listen");
anagram("Hello", "World");
anagram("Such", "much");
anagram("heart", "earth");

console.log(
  `----------------------------------------------------------------------------`
);

// function isPalindrom(str1){
//     const a= str1.split("").reverse().join("");
   
//     if (a===str1) {
//        console.log(true);
//     }
//     else{
//        console.log(false);
//     }
   
//    }
//    isPalindrom("madam");
//    isPalindrom("dad");
//    isPalindrom("hello")