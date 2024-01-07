console.log("=======================STEP 1========================================================================");

var vowelsCount = function (string) {
  let vowelsCount1 = 0;

  for (let i = 0; i <= string.length; i++) {
    let string1 = string.charAt(i).toLowerCase();
    if (string1 == "a" || string1 == "i" || string1 == "e" || string1 == "o" || string1 == "u"
    ) {
      vowelsCount1 = vowelsCount1 + 1;
    }
  }
  console.log(`At the given String Number of Vowels Are ${vowelsCount1}`);
};
vowelsCount("I am very good IT Developer");


console.log("=======================STEP 2========================================================================");

function sumOfCube(n) {
  var result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i * i * i;
  }
  return console.log(`Sum of cube of number from 1 to ${n} is ${result}`);
}
sumOfCube(5);

console.log("=======================STEP 3========================================================================");
function oddPositionedChars(string) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    let char = string.charAt(index);

    if (index % 2 == 1 && char != " ") {
      result += string.charAt(index);
    }
  }
  console.log(`Given string is\n"${string}"`);
  console.log(`odd position character of given String is\n"${result}"\n`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");
