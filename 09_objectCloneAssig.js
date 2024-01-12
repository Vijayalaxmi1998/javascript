console.log(`=======================Step1======================================================================================================================`);
console.log(`\nCreating the Object ->"bankSbi" using literals with at least 4 properties`);
const bankSbi={
    bankName:"SBI",
    type:"Banking",
    branchName:"SBI Jath branch",
    codeIFCS:"SBI0000007",
    acountNumber:36056265
}
console.log(bankSbi);
console.log(typeof bankSbi);


console.log(`\n=======================Step2===================================================================================================================`);
console.log(`\n Create the object -> "bankLocation" using literals with properties:Street,city,pin`);
const bankLocation={
    street:"Sadashiv Pet",
    city:"Jath",
    pin:404416
}
 console.log(bankLocation);

 console.log(`\n=======================Step3==================================================================================================================`);
 const newBankSbi=Object.assign({},bankSbi);
 const newBankLocation=Object.assign({},bankLocation);
 console.log(`\ncreated ${bankSbi} from the bankSbi`);
 console.log(bankSbi);

 console.log(`\ncreated ${newBankLocation} from the bankLocation`);
 console.log(newBankLocation);

 console.log(`\n=======================Step4==================================================================================================================`);
 let rateOfInterest={
    homeLoanInterest:"8.6%",
    personalLoanInterest:"10.5%",
    dueInterest:"I don't know"
 }

 console.table(rateOfInterest);

 console.log(`\n=======================Step5==================================================================================================================\n`);
 //const sbiDetails=Object.assign(bankSbi,bankLocation,rateOfInterest)   it is changes to origanal bankSbi object 
 console.log(`\n Creating sbiDetails Object`);
 console.log(bankSbi);
 console.log(bankLocation);
 console.log(rateOfInterest);
 const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest)
 console.table(sbiDetails);

 console.log(`\n=======================Step 6==================================================================================================================\n`);
console.log('Travesre this merged object- Step 5 using for in loop and log details properly');
console.log("using for in loop");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        //console.log(element);
        //console.log(key);
        console.log(`\t${key} :${element}`);
    }
}

console.log(`\nUsing for of loop`);
const keys=Object.keys(sbiDetails);    //Object.keys gives keys of object
for (const iterator of keys) {
    console.log("\t",iterator);
}

console.log(`Object entries....`);
const entries= Object.entries(sbiDetails);      //Object.entries gives key and value at pair
for (const element of entries) {
    //console.log(`\t${element}`);             if we write at the log it not gives the braket
    console.log("\t",element);
}



console.log(`\n\n\n\n\n\n\n\n\n`);
console.log(`---------------------Pratice---------------------------------------`);
// we what the branchName from sbiDetails then
console.log(entries[2][1]);  // it gives only brancename

//to find the city and value is
console.log(entries[6]);

console.log(entries[6][1]);

console.table(entries);

console.log(entries[0]);
console.log(entries[0][0]);
console.log(entries[0][1]);

let oneFiveValue=Object.values(sbiDetails)
console.log(oneFiveValue);
for (const key of oneFiveValue) {
    console.log(key);
}

console.log(oneFiveValue.slice(1,6));