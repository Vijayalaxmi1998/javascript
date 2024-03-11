class Car{
    
    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price;
    }
    look(){
    console.log("Car is looking vary nice");
    }
}

const hundayi1=new Car("Hundayi","black",1500000);
console.log(hundayi1);
hundayi1.look();

const a=10;
function closurefun(){
  const b=20;
  const innerFun=function (){
    const c=100;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  return innerFun;
}

closurefun()();
