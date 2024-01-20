const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log('------------------------Step 1------------------------------------');
arrayNumbers.forEach((element, index, arrayNumber)=>{
console.log(`value :${element} and Index:${index}`);
}
);

console.log('------------------------Step 2------------------------------------');
arrayNumbers.forEach((element, index, arrayNumber)=>{
    if(element>0){
        console.log(element);
    }
});

console.log('------------------------Step 3------------------------------------');
let newArray=[];
arrayNumbers.forEach((element, index, arrayNumber)=>{
    if(element<=0){
        newArray.push(element);
    }

})
console.log(newArray);

console.log('------------------------Step 4------------------------------------');
arrayNumbers.forEach((element, index, arrayNumber)=>{
    if(element%2==0){
        console.log(element);
    }
});

console.log('------------------------Step 5------------------------------------');
let sum=0;
arrayNumbers.forEach((element, index, arrayNumber)=>{
    sum=sum+element;
});
console.log(`Sum of all element in array is:${sum}`);


console.log('------------------------Step 6------------------------------------');
arrayNumbers.forEach((element, index, arrayNumber)=>{
    if(index%2==0){
        console.log(element);
    }
});


