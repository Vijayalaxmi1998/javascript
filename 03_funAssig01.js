console.log("=====================================STEP 1=============================");
function name(){
    console.log("This function is function with no Argument and no return value");
}
name();

function lastName(){
    var myLastName="Kaleguddi"
    console.log("my last name is:",myLastName);
}

lastName();

console.log("====================================STEP 2==============================");
function personalDetails(firstName,lastName,collegeName){

    console.log("my First Name is:",firstName);
    console.log("my Last Name is:",lastName);
    console.log("My College Name is:",collegeName);

}
personalDetails("vijayalaxmi","Kaleguddi","Sardar Patel University");

console.log("====================================STEP 3=============================");

function swapValues(n1,n2) {
    console.log("Value Before swap");
    console.log("n1=>",n1);
    console.log("n2=>",n2);
    console.log("Value After swap");
    var tempt=n1;
    n1=n2;
    n2=tempt;
    console.log("n1=>",n1);
    console.log("n2=>",n2);    
}

swapValues("Virat","Anuska");
console.log("-------------------------------------------------------------------------");
swapValues(1000,2000);

console.log("====================================STEP 4================================");
function addThreeValues(n1,n2,n3) {
    console.log("Addition of three values are=");
    result=n1+n2+n3;
    console.log(result);
    
    
}

addThreeValues(10.23,600,40);

console.log("--------------------------------------------------------------------------");

addThreeValues("Hello"," Good"," Morning");
