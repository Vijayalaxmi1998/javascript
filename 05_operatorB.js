console.log("\n=========================Step 1====================================================");
function greaterNumber(val1,val2) {
    console.log(`finding the greatest number amongst two number`);
  val1>val2?console.log(`${val1} is greater than ${val2}`):console.log(`${val1} is less than ${val2}`);;
}

greaterNumber(10,-10);
greaterNumber(800,899);

console.log("\n========================Step 2====================================================");

function isEvenOrOddNum(val){
    console.log(`Given Number is ${val}`);
   return console.log(`${val%2==0?"given number is even":"given number is odd"}\n`); 

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("\n========================Step 3====================================================");
function wordLenght(word){
    var wordlen=word.length;
    console.log(`Given word length is ${wordlen}`);
    console.log(`Given word length is ${wordlen%2==0?"EVEN":"ODD"}\n`);
}

wordLenght("JavaScript");
wordLenght("developer");
wordLenght("Google");
