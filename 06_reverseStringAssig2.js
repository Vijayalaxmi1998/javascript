function reverseString(string) {
  let result1 = "";
  for (let index = string.length - 1; index >= 0; index--) {
    let char = string.charAt(index);
    //console.log(char);
    if (char != " ") {
      let result = string.charAt(index);
      //console.log(result);

      result1 = result1.concat(string.charAt(index), "");
    }
  }
  console.log(`Given String is:\n "${string}"`);

  console.log(`After Reversing the String Result is:\n"${result1}"\n\n`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");
