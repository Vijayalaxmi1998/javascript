// let n=10;
// let sum=0;
// for (let i = 0; i < n; i++) {
//     sum=sum+i;
    
// }
// console.log(sum);
    
function sum(n) {
    let sum=0;
    for(i=0;i<=n;i++){
        sum=sum+i;
    }
  return  console.log(sum);
}

sum(10);
sum(5);

function arraySum(array) {
    let array1=array;
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
        sum=sum+element;
        
    }
    console.log(sum);
}

arraySum([11,22,33]);