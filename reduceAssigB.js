class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
  getDetails() {
    console.log(
      `ID:${this.emp_id},NAME:${this.emp_name},DEPT:${this.emp_dept},SALARY:${this.emp_salary},COMPANY:${this.emp_company}`
    );
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(arrayEmps);

console.log(
  `--------------------------Step 1----------------------------------------------------------------------`
);
console.log(`1. Find all the the employees from "Wipro" company`);
let company_wipro = arrayEmps.filter((element) => {
  return element.emp_company == "Wipro";
});

company_wipro.forEach((element) => {
  element.getDetails();
});

console.log(
  `--------------------------Step 2--------------------------------------------------------------`
);
console.log(`2.Find all the employees from "IT" and "HR" dept`);
let idAndHr = arrayEmps.filter((element) => {
  return element.emp_dept == "IT" || element.emp_dept == "HR";
});
idAndHr.forEach((element) => {
  element.getDetails();
});

console.log(
  `--------------------------Step 3----------------------------------------------------------------`
);
console.log(`3.Find all the employees whoose emp id's are greater than 50`);
let idGreaterThan50 = arrayEmps.filter((element) => {
  return element.emp_id > 50;
});

idGreaterThan50.forEach((element) => {
  element.getDetails();
});

console.log(
  `--------------------------Step 4----------------------------------------------------------------------`
);
console.log(
  `4. Find all the employees whose name start with letter "A" or "V" or "M"`
);
let byName = arrayEmps.filter((element) => {
  return (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  );
});

byName.forEach((element) => {
  element.getDetails();
});

console.log(
  `--------------------------Step 5---------------------------------------------------------------------`
);
console.log(
  `Find the average salary of the employee for all the the department `
);
let sumSalary = arrayEmps.reduce((rt, element) => {
  return rt + element.emp_salary;
}, 0);

console.log(`Sum of All department Salary:${sumSalary}`);
let totalDept = arrayEmps.length;
console.log(`total deparment:${totalDept}`);
console.log(
  `the Average salary of employee for department is:${sumSalary / totalDept}`
);

console.log(
  `--------------------------Step 6--------------------------------------------------------------------`
);
console.log(`6.Find the average salary for "IT" department`);
let itDept = arrayEmps.filter((element) => {
  return element.emp_dept == "IT";
});

let sumOfITdept = itDept.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);

console.log(`Sum of Salary of IT department is: ${sumOfITdept}`);
let totalItDept = itDept.length;
console.log(`Total IT department is: ${totalItDept}`);
console.log(
  `The average Salary for "IT" department: ${sumOfITdept / totalItDept}`
);
