console.log("I am Vijayalaxmi");

function name(){
    var lastName="My last Name is Kaleguddi";

    console.log(lastName);
}


//setTimeout(name,10000);

console.log(`-----------Closure function-----------------`);

function name11(){
    console.log('vijayalaxmi');
    function lastName() {
        console.log("Kaleguddi");
        }
    return lastName();  
}
name11();

console.log(`-------------callback----------------------`);
function eduction(func){
    console.log("M.SC");
    return func();
}

eduction(name11)