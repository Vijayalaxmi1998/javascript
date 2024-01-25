const submitButtonAdd= document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');

const resultValue = document.querySelector('#resultValue');

submitButtonAdd.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
} );

const submitSubstration=document.querySelector("#sub");
submitSubstration.addEventListener("click", () =>{
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne - valueTwo;
    console.log(valueOne - valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML = result;
});

const submitButtonMultipication=document.querySelector("#multi");
submitButtonMultipication.addEventListener("click",() =>{
    const valueOne= +fieldOne.value;
    const valueTwo= +fieldTwo.value;
    const result=valueOne*valueTwo;
    console.log(valueOne*valueTwo);
    resultValue.innerHTML=valueOne*valueTwo;
}

);

const submitButtonDivision=document.querySelector("#del");
submitButtonDivision.addEventListener("click",() =>{
    const valueOne= +fieldOne.value;
    const valueTwo=+fieldTwo.value;
    const result=valueOne/valueTwo;
    console.log(valueOne/valueTwo);
    resultValue.innerHTML=valueOne/valueTwo;
})
