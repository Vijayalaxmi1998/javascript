console.log(
  "***************************STEP 1***********************************************************\n"
);
var isEvenOrOdd = function (val) {
  if (val % 2 == 0) {
    console.log(`given value ${val} is: "EVEN"`);
  } else {
    console.log(`given value ${val} is: "ODD"`);
  }
};
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log(
  "***************************STEP 2***********************************************************\n"
);
var isEligible = function (age) {
  if (age >= 18) {
    console.log("Congratution!,you are eligible for vote");
  } else {
    console.log("Sorry,you are Not eligible for vote");
  }
  console.log("");
};
isEligible(18);
isEligible(20);
isEligible(17);
isEligible(40);
console.log(
  "***************************STEP 3***********************************************************\n"
);
var character = function (word) {
  if (word.length > 10) {
    console.log("Given word length is more than 10");
  } else {
    console.log("Given word length is less than or equal to 10");
  }
};
character("JavaScript-ES6");

console.log(
  "***************************STEP 4***********************************************************\n"
);
var string = function (word) {
  if (word.startsWith("Java")) {
    console.log(`Given word is start with "Java"`);
  } else {
    console.log(`Given word is not Star with "Java"`);
  }
};
string("JavaScript Language");

console.log(
  "****************************************************************************************\n"
);
