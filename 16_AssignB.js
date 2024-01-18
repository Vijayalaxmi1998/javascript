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

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`----------------------------------Step 1----------------------------------------------`);
for (const iterator of arrayEmployees) {
    if (iterator.emp_company=="TCS") {
        console.log(`NAME:${iterator.emp_name},COMPANY:${iterator.emp_company}`);
        }
    }

console.log(`\n----------------------------------Step 2----------------------------------------------`);
for (const iterator of arrayEmployees) {
    if (iterator.emp_dept=="Finance") {
        console.log(`NAME:${iterator.emp_name},DEPARTMENT:${iterator.emp_dept}`);
        }
}

console.log(`\n----------------------------------Step 3----------------------------------------------`);

for (const element of arrayEmployees) {
    if (element.emp_name.startsWith("R")) {
        element.getDetails();
        }
}

console.log(`\n----------------------------------Step 4----------------------------------------------`);
for (const element of arrayEmployees) {
    if (element.emp_salary>75000) {
        console.log(`Name:${element.emp_name}, Company:${element.emp_company}, Salary:${element.emp_salary}`);
        }
}

console.log(`\n----------------------------------Step 5----------------------------------------------`);
for (const element of arrayEmployees) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        element.getDetails();
        }
}

console.log(`\n----------------------------------Step 6----------------------------------------------`);
for (const element of arrayEmployees) {
    if (element.emp_company=="Infy") {
        element.getDetails();
        
    }
    
}









