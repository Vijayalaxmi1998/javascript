console.log(
  "==============================Step 1==============================================\n"
);

var marriageEligibility = function (gender, age) {
  if (gender == "Male" && age >= 21) {
    console.log(`${gender} is Eligible for marriage whose age is ${age} \n`);
  } else {
    if (gender == "Female" && age >= 18) {
      console.log(`${gender} is Eligible for marriage whose age is ${age} \n`);
    } else {
      console.log(
        `${gender} is "NOT" Eligible for marriage whose age is ${age} \n`
      );
    }
  }
};
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
marriageEligibility("Male", null);
marriageEligibility("Female", undefined);
marriageEligibility("Male", NaN);
