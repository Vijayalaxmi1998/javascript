console.log(`==================Given Array==================================================`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);

console.log("=====================Step 1=====================================================");
console.log(`the total elements avaible or length:`);
console.log(arrayNumbers.length);
console.log(' ');

console.log("=====================Step 2=====================================================");
console.log(`The first element and last element in the arrayNumbers`);
console.log(`First Element: ${arrayNumbers[0]}\nLast Element: ${arrayNumbers[arrayNumbers.length-1]}\n`);

console.log("=====================Step 3=====================================================");
console.log(`third last element using length property`);
console.log(`3rd last element:${arrayNumbers[arrayNumbers.length-3]}\n`);

console.log("=====================Step 4=====================================================");
console.log(`The all even numbers using for of loop`);
//arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
for (let element of arrayNumbers) {
    if (element%2==0) {
    console.log(element);    
    }
}
console.log(" ");

console.log("=====================Step 5=====================================================");
console.log(`the all odd number using for of loop `);
for (const element of arrayNumbers) {
    if (element%2==1) {
        console.log(element);
        
    }
    
}
console.log(" ");

console.log("=====================Step 6=====================================================");
console.log(`All the even positioned element from arryNumber,sum it`);
//arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

sum=0;
for (const element in arrayNumbers) {
    if (element%2==0) {
        console.log(arrayNumbers[element]);
        sum=sum+arrayNumbers[element];
        
    }
    
}

console.log(`Sum of even positioned element:${sum}\n`);

console.log("=====================Step 7=====================================================");
console.log(`All the odd positioned element from arryNumber,sum it`);
//arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
sum=0;
for (const element in arrayNumbers) {
    if (element%2!=0) {
        const eachElement = arrayNumbers[element];
        console.log(eachElement);
        sum+=eachElement
        
    }
}
console.log(`Sum of odd positioned element:${sum}\n`);

console.log("=====================Step 8=====================================================");
console.log(`the sum of all elements from arrayNumbers`);
//arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
let totalSum=0;
for (const element of arrayNumbers) {
    console.log(element);
    totalSum=totalSum+element;
}
console.log(`Sum of the All numbers:${totalSum}\n`); 

console.log("=====================Step 9=====================================================");
console.log(`Number which are multiple of 5`);
//arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%5==0) {
console.log(`\t${arrayNumbers[index]}`);        
    }
}

console.log("=====================Step 10=====================================================");
console.log(`Is number 115 avaible in arrayNumbers`);
console.log(arrayNumbers.includes(115));

console.log("=====================Step 11=====================================================");
console.log(`Is number 23 available in arrayNumbers`);
console.log(arrayNumbers.includes(23));

console.log("=====================Step 12=====================================================");
console.log(`Insert numbers -> 55,66 at index 3`);
//arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);

console.log("=====================Step 13=====================================================");
console.log(`Delete 3 elements starting from index 4`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);





















