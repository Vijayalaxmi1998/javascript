//n!=n*(n-1)*(n-2)*...*(n-n+1)*1
// let n=5
// let factorial=1;
// for (let i = n; i >= 1; i--) {
//     factorial=factorial*i;
    
// }
// console.log(factorial);

let result=1;
function factorial(n){
    if (n===0) {
        return 1
    }if (n===null || n===undefined || typeof n==='string' || typeof n!=='number' ) {
        return `please give valid number`
    } else {
        for (let i = n; i >= 1; i--) {
                result=result*i;
               
    } 
    return result;
}
}