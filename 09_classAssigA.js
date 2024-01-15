console.log(`======================Step 1========================================================================================================================`);
class Vehicles{
    constructor(company,color,type,price,openWindow){
        this.company=company;
        this.color=color;
        this.type=type;
        this.price=price;
        this.openWindow=openWindow

    }
}

const vehicle1=new Vehicles("tata","red","Compact Car",800000,true);
const vehicle2=new Vehicles("Audi","black","Hybrid Car",1000000,false);
const vehicle3=new Vehicles("Honda","chocalate","Minivan",500000,true);
const vehicle4=new Vehicles("Mercedes-Benz","black","Crossover",1666666,true);
const vehicle5=new Vehicles("Mercedes-Benz","White","Crossover",1966666,false);

let arrayOfVehicles=[vehicle1,vehicle2,vehicle3,vehicle4,vehicle5];
for (const iterator of arrayOfVehicles) {
    console.log(iterator);
    
}

console.log(`======================Step 2========================================================================================================================`);
class College{
    constructor(collegeName,noOfDepartment,NAAC,noOfTeacher,library){
        this.collegeName=collegeName;
        this.noOfDepartment=noOfDepartment;
        this.NAAC=NAAC;
        this.noOfTeacher=noOfTeacher;
        this.library=library
    }
    display(){
        console.log(`CollegeName:${this.collegeName},\nNo Of Deparment:${this.noOfDepartment},\nNAAC:${this.NAAC},\nNo of Teacher:${this.noOfTeacher},\nisLibrary:${this.library}`);
    }
}

const college1=new College("Kanya Prasala",3,3,10,"No");
college1.display()


