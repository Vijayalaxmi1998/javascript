console.log(`Given Array is`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(arrayNums);
console.log(
  `-----------------------Step1------------------------------------------------------------------------------------------------------------------`
);
console.log(`clonning the array as copyArrayNums`);
const copyArrayNums = arrayNums;
console.log(copyArrayNums);
copyArrayNums.push(55);
copyArrayNums.push(66);
console.log(`After the use push method copyArrayNums`);
console.log(copyArrayNums);

console.log(`After the use push method Original Array is:`);
console.log(arrayNums);
console.log(
  `from this we say that if changes in clonning array then there is change in oigininal array hence it is shallow clone`
);

console.log(
  `-----------------------Step2-------------------------------------------------------------------------------------------------------------`
);
console.log(`Clonning the arrray using spread method`);
const copySpreadArrayNums = [...arrayNums];
console.log(copySpreadArrayNums);
console.log(`Updating the originil array`);
//console.log(arrayNums.indexOf(90));
arrayNums.splice(4, 1, 10, 25);
console.log(arrayNums);
console.log(`Clonning Array was`);
console.log(copySpreadArrayNums);
console.log(
  `here we changes the original array thre is no change another array hence it is deep clone`
);

console.log(
  `-----------------------Step3------------------------------------------------------------------------------------------------------------`
);
console.log(`merge and concate using spread method`);
const arrayEven = [2, 30, 14, "B"];
const newArrayNums = [...arrayEven, ...arrayNums];
console.log(newArrayNums);

console.log(
  `-----------------------Step4-----------------------------------------------------------------------------------------------------------`
);
console.log(`Creating Employee_Info`);
const Employee_Info = {
  Employee_Info: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,000 INR",
    aug_month: "50,000 INR",
    jun_month: "65,000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokli, 431202",
    },
    city: "mumbai",
    state: "Maharatra",
    country: "India",
  },

  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91-9096 5678 77"],
};

console.log(
  `-----------------------Step5----------------------------------------------------------------------------------------------------------------------------------`
);
console.log(`log the employee details `);
console.log(Employee_Info.address.locality);
console.log(Employee_Info.address.city);
console.log(Employee_Info.address.state);
console.log(Employee_Info.address.country);

console.log(Employee_Info.mobiles);

console.log(
  `-----------------------Step6---------------------------------------------------------------------------------------------------------------------------------`
);
const EmployeeDetails = JSON.parse(JSON.stringify(Employee_Info));
EmployeeDetails.salary.july_month = "80,000";
console.log(EmployeeDetails);
console.log(Employee_Info);
Employee_Info.address.country = "United Kingdom";

console.log(
  `-----------------------Step6------------------------------------------------------------------------------------------------------------------------------------`
);
console.log("updating values for original and clonning the aaray");

console.log(Employee_Info.address.country);
console.log(EmployeeDetails.address.country);

//console.log(Object.keys(Employee_Info).length);    find the length of object
