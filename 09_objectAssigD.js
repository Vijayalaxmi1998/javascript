console.log("\n\n1. Think of all the properties that you could add (Add minimum 5 properties)");
let professor={
    name:"Sweta",
    qualification:"M.Sc.",
    subject:"Statistics",
    lectureHours:3,
    collegeName:"P.D.V.P"
};
console.log(professor);

console.log("\n================Step 2================================================================================================================================");
console.log('Includes nested object object degrees');

console.log(professor);
degrees={
    engineering:"CSC",
    PHD:'Adv Computing'
}
professor.degrees={
    engineering:"CSC",
    PHD:'Adv Computing'
}
console.table(professor);


console.log(`\n===============step3=====================================================================================================================================================================`);
console.log(`Also Add the one array -> "Cerificate"`);
professor.certificates=["Hancker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"];
console.table(professor.certificates);

console.log(`\n===============step4===================================================================================================================================================================`);
console.log(` Also add new property like totalExperience:"14 years"`);

professor.totalExperience="14 years";
console.table(professor);

console.log(`===============step5===================================================================================================================================================================`);
console.log("Modify any existing property");
console.log(`Modify the totalExperience 14 year to 10 year`);
professor.totalExperience="10 years";
//console.table(professor);
professor.certificates[0]="Hanker Rank participation Certificate";
professor.degrees.PHD="Mathematics"
console.table(`After the updation of total experience 14 years to 10 year->  ${professor.totalExperience} `);

console.log(`===============step6==================================================================================================================================================================`);
console.log(`Add one new certificate -> "Oracle Certified" at the 2nd index of array`);
professor.certificates.splice(2,0,"Oracle Certified");
console.table(professor.certificates);

console.log(`===============step7=================================================================================================================================================================`);
console.log(`log the last element of the array -> certificates`);
console.log(professor.certificates[3]);
console.log(professor.certificates[professor.certificates.length-1]);

console.log("==============Step 8============================================================================================================================================================");
console.log(`Log complete object on console`);
console.log(professor.degrees);

console.log("==============Step 9===========================================================================================================================================================");
console.log(`Traverse array -> certificates using for of loop`);
for (const iterator of professor.certificates) {
    console.log(`\t${iterator}`);
    
}






