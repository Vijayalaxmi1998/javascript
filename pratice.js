for (let i= 10; i<20; i++) {
    console.log(i);
    
}

console.log("-----using While Loop--------");
var i=10;
while (i<20) {
    console.log(i);
    i++;
    
}

console.log("-----Do While Loop--------");
var i=10;
do {
    console.log(i);
    i++;
} while (i<9);

console.log(`--------`);
count=0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        count += 1;
    }
}
console.log(count);

console.log(` ---------------resvese string using split and join method----------------------`);
var str="Vijayalaxmi";
var str1=str.split("");
console.log(str1);
str1.reverse();
console.log(str1);
str=str1.join("");
console.log(str);

console.log(` ---------------resvese string using for loop----------------------`);

var str="Vidya";
var str1="";
for (let i = 0; i < str.length; i++) {
    str1=str[i]+str1;   
}
console.log(str1);


