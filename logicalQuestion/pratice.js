// function Person(){
//     this.name="vijaya",
//     this.age=25,
//     this.education="M.Sc";
//     this.greet=function(){
//         return `Hii ${this.name}`
//     }
// }

// const person=new Person();
// console.table(person.greet());

// function Vijaya(){
//     this.specialization="Statistics"
// }
// const vijaya=new Vijaya();
// Vijaya.prototype=Object.create(Person.prototype)
// console.log(vijaya.greet());

function Animal(name){
    this.name=name;
};

Animal.prototype.sayHello=function(){
    console.log(`Hello, I am ${this.name} `);
}

let array=[11,22 ,33,11,22,44,66,77,88,11];
console.log(array);

const newArray=[...new Set(array)]
console.log(newArray);

let uniqueArray=[];
for (const elment of array) {
    if(uniqueArray.indexOf(elment)===-1){
        uniqueArray.push(elment);
    }
}
console.log(uniqueArray);

let array1=[76,34,55,66,88,101];
let filterEven=array1.filter((currentValue) =>{
    return currentValue%2===0;
}

)
console.log(filterEven);


let arr=[1,2,3,4];
arr.length=0;
console.log(arr);

array1=[];
console.log(array1);

const sum = array.reduce( (runningTotal, value) => {
    return runningTotal + value;
},0);
console.log(sum);