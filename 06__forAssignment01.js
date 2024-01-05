console.log(
  "=================Step1============================================\n"
);
console.log("number from 5 to 15 by increment by 1");
var num="";
for (var i = 5; i <= 15; i++) {
  num+=i+" ";
  
}
console.log(num);

console.log(
  "\n=================Step2============================================\n"
);
console.log("number from 50 to 40 by decrementing by 1\n");
var num="";
for (var idx = 50; idx >= 40; idx--) {
  num=num.concat(i," ");
  
}
console.log(num);

console.log(
  "\n=================Step3============================================\n"
);
console.log("To find first 15 ODD Number\n");
var n1="";
count = 1;
for (var i = 1; count <= 15; i = i + 2) {
  
  count++;
  n1+=i+" ";
}
console.log(n1);

console.log(
  "\n=================Step4============================================\n"
);
console.log("first 10 EVEN numbers\n");
var n1="";
count = 1;
for (var i = 0; count <= 10; i = i + 2) {
  count++;
  n1=n1.concat(i," ");

}
console.log(n1);

console.log(
    "\n=================Step5============================================\n"
  );
  console.log("TO print table of 5 like ->5 10 15 20 ... 50");
  var n1="";
for(var i=5;i<=50;i=i+5){
   n1+=i+" ";
} 
console.log(n1);

console.log(
    "\n=================Step6============================================\n"
  );
  console.log("To print table of 10 like 10 20 30 40 ... 100");
var n1="";
  for(var i=10;i<=100;i=i+10){
   
    n1=n1.concat(i,"  ");
 } 
 console.log(n1);

 console.log(
    "\n=================Step7============================================\n"
  );
  console.log("To print table of 10 in reverse order like-> 10 20 30 40 ... 100");

  var num="";
  for(var i=100;i>=10;i=i-10){
    
    num=num.concat(i," ");
  }
  console.log(num);
  


