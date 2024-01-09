console.log("Given array is");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log("");

console.log(`=================Step 1==========================================================================`);
console.log(`Log the First and Last element on console`);
console.log(`First element:${fruits_seasonal[0]}`);
console.log(`Last Element :${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("");

console.log(`=================Step 2============================================================================`);
console.log(`Add element->Papaya before the element 'Banana'` );
fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);
console.log("");

console.log(`=================Step 3=========================================================================`);
console.log(`Remove the Mango from the array`);
console.log(`Updated string:`);
console.log(fruits_seasonal);
console.log(`After Removing the Mango from array`);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log("");

console.log(`=================Step 4==========================================================================`);
console.log(`Add element or insert an element "Pineapple" at the last position`);
console.log("The Existing Array is:");
console.log(fruits_seasonal);
console.log('After Adding the Pineapple at last position of array:');
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);
console.log("");

console.log(`=================Step 5===========================================================================`);
console.log(`Insert an element-"Dragon Fruit" before "Water Melon"`)
console.log("Existing String is:");
console.log(fruits_seasonal);
console.log(`Index of "Water Melon"`);
console.log(fruits_seasonal.indexOf("Water Melon"));
console.log(`After Adding "Dragon Fruit" before "Water Melon"`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);
console.log("");

console.log(`=================Step 6=================================================================================`);
console.log(`Replace an element 'Orange' with 'Kiwi'`);
console.log("Existing String is:");
console.log(fruits_seasonal);
console.log(`After Replace an element 'Orange' with 'Kiwi'`);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);
console.log('');

console.log(`=================Step 7==============================================================================`);
console.log(`The element starting from index 1 to 4`);
console.log(fruits_seasonal.slice(1,5));
console.log("");

console.log(`=================Step 8==============================================================================`);
console.log(`Only seslect last 3 element and log on console:Use the length property`);
console.log(fruits_seasonal);
console.log(fruits_seasonal.slice(fruits_seasonal.length-3));













