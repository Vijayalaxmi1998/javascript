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

const arrayStudents = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_viny, emp_mahi];

console.log(`----------------------------------Step 1-----------------------------------------------------`);
arrayStudents.forEach((element) =>{
    if (element.emp_company=="TCS") {
        console.log(`Name of employee: ${element.emp_name} and Name of the Company: ${element.emp_company}`);
        
    }
})

console.log(`----------------------------------Step 2-----------------------------------------------------`);
arrayStudents.forEach((element)=>{
    if(element.emp_salary>=50000){
        element.getDetails()
    }
})

console.log(`----------------------------------Step 3-----------------------------------------------------`);
var sum=0;
arrayStudents.forEach((element)=>{
    
    sum=sum+element.emp_salary;
    
})
console.log(`Sum of all employee Salary:${sum}`);

console.log(`----------------------------------Step 4-----------------------------------------------------`);
var sum=0;
arrayStudents.forEach((element)=>{
    
    sum=sum+element.emp_salary;
    
})
console.log(`Sum of all employee Salary:${sum}`);
let numEmp=arrayStudents.length;
console.log(`No of employee :${numEmp}`);
let avgEmp=sum/numEmp;
console.log(`Average Salary of Employee:${avgEmp}`);

console.log(`----------------------------------Step 5-----------------------------------------------------`);

arrayStudents.forEach((element) => {
    if((element.emp_dept=="IT" ||  element.emp_dept=="HR")&& element.emp_salary>=75000){
        element.getDetails();
    }
})

console.log('-----------------------------------------------------------------');
// arrayStudents.forEach((element) => {
//     if(element.emp_dept=="IT" && element.emp_salary>=75000 ||  element.emp_dept=="HR"&& element.emp_salary>=75000){
//         element.getDetails();
//     }
// })

