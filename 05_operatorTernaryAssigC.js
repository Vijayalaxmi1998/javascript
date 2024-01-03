console.log(
  "========================Step 1===================================\n"
);
function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender=="Male" && age>=21
      ? `Hey ${boyName}you are eligible for Marriage`
      : `${boyName} you not eligible for Marriage`;
  return console.log(result);
}

maleMarriageEligibility("Male", 25, "Billgates");
console.log('');
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log("==========================Step 2===============================\n");
function femaleMarriageEligibility(gender,age,girlName) {
    var result=gender=="Female"&&age>=18?`${girlName} you not are eligible for Marriage`:`${girlName}you are eligible for marriage`;
    return console.log(`${result}\n`);
}

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");

console.log("#################################################################################");
