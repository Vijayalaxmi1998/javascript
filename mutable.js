var name="Anushri";
var name1=name.split("");
console.log(name1);
name1.reverse();
console.log(name1);
name=name1.join("");
console.log(name);


console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

for (let index = 0; index <name.length; index++) {
    const element = name[index];
    console.log(element);
    
}

let str="Pratiksha";
let sum=0;
for (let index = 0; index < str.length; index++) {
    if(index%2==0){
        sum=sum+index;
        console.log(sum);
    }
    
}

let array=[1,2,3,4,5,6];
for (let index = array.length-1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
    
}
