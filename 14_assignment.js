function removeDuplicate(arr) {
  let uniqueArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (uniqueArray.indexOf(arr[index]) === -1) {
      uniqueArray.push(arr[index]);
    }
  }
  return console.log( uniqueArray);
}

removeDuplicate([11,3,4,11,4,7,3])

// const str= "How are you mate"

//Expected output => "How ArE YoU MatE";

function capital(str){
  let words
}



