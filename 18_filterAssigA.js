class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
    // Member Functions or methods
    getDetails(){
        console.log(`ID:${this.emp_id}, NAME:${ this.emp_name}, DEPT:${ this.emp_dept}, SALARY:${ this.emp_salary}, COMPANY_NAME:${ this.emp_company}`);
    }
}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","Monika",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayStudents = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika, emp_viny, emp_mahi];

console.log(`---------------------------------Step 1---------------------------------------------`);
let companyTcs= arrayStudents.filter((element) =>{
    return element.emp_company=="TCS";
});
companyTcs.forEach((element)=>{
    console.log(`Company Name:${element.emp_company} and Employee Name:${element.emp_name}`);
});

console.log(`---------------------------------Step 2---------------------------------------------`);
let companyWipro=arrayStudents.filter((element)=>{
    return element.emp_company=="Wipro";
});
console.log(companyWipro);
//console.log(companyWipro);
let sumWiproSalary=companyWipro.reduce((runningTotal,element)=>{
    return runningTotal+element.emp_salary;
},0);
console.log(`Sum of wipro Salary is:${sumWiproSalary}`);
let noSalary=companyWipro.length;
console.log(`number of wipro company:${noSalary}`);
console.log(`average salary of employee from company Wipro:${sumWiproSalary/noSalary}`);

console.log(`---------------------------------Step 3---------------------------------------------`);
let companyWiproAndInfy=arrayStudents.filter((element) => {
    return element.emp_company=="Wipro" || element.emp_company=="Infy";
});

let total_salary=companyWiproAndInfy.reduce((rt,element) => {
return rt+element.emp_salary;
},0);
console.log(`Sum of the total salary of company Wipro and Infy:${total_salary}`);
let num_company=companyWiproAndInfy.length;
console.log(`Number of companys Wipro and Infy is:${num_company}`);
console.log(`average salary of employee from companies Wipro or Infy:${total_salary/num_company}`);