// function prime(num){
//     if(num===1){
//         return false;
//     }
//     for (let i = 2; i <num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// console.log(prime(10));
// console.log(prime(5));

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        } 
    }
    return true;
}

console.log( isPrime(1));