var num = 5;
var result = num % 2;
var resultValue = result == 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

var n1 = "100";
var n2 = 100;
var result = n1 == n2 ;
console.log(` Comparision using == operator ==> ${ result } `);


var result = n1 === n2 ;
console.log(` Comparision using === operator ==> ${ result } `);

var n1=5;
var n2=6;
console.log(`Additition of two variable: ${n1-n2}`);
console.log("Addition og two variable:",n1-n2);

var a=10;
var b=a++;

console.log(b);

var c=20;
var d=++c;
console.log(d);
console.log(b);

var result=0/0;
console.log(result);  // NaN => Not a Number

var result1=2/0;
console.log(result1);

var result=100+true;   //Auto and implicite conversion
console.log(result);

var result=99-false;
console.log(result);   //implicite conversion fasle is conversion 0 and true to 1

console.log("1"+"1")

var d=+"200";
console.log(d);
console.log(typeof d);

var z=+"jenny";
console.log(z);

var s1="200A"
var res=Number(s1);
console.log(typeof res)
console.log(res);

var p=Boolean(57.9);
console.log(p);