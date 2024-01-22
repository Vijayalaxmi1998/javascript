function stringHandsOn(){
    var apriciate="   Hey you are doing good, keep it up   ";
    console.log(`1. printing the given sentence: ${apriciate}`);
    console.log(`--------------------------------------------------------------------------------`);
    console.log(`2. lenght of string is: ${apriciate.length}`);
    console.log('---------------------------------------------------------------------------------');
    var afterRemovingSpace=apriciate.trim()
    console.log(afterRemovingSpace);
    console.log(`3. After removing Spaces lenght:${afterRemovingSpace.length}`);
    console.log(`4. extra removing spaces are:`,apriciate.length-afterRemovingSpace.length);

    console.log(`5. first and last character of sentence after trim ${afterRemovingSpace.charAt(0)} and ${afterRemovingSpace.charAt(afterRemovingSpace.length-1)}`);

    console.log("------------------------------------------------------------------------------------");
    console.log(`6.count of total words available in the string is: ${afterRemovingSpace.split(" ").length}`);
    console.log("------------------------------------------------------------------------------------");
    console.log(`7.Index of Word "Good" from the given string: ${apriciate.indexOf("good")}`);
    //console.log(`7.Index of Word "Good" from the given string: ${afterRemovingSpace.indexOf("good")}`);
    console.log("------------------------------------------------------------------------------------");
    console.log(`8.Print the substring starting from index 22, using substring() and slice()`);
    console.log(`using substring() method: ${apriciate.substring(22)} `);
    console.log(`using slice() method: ${apriciate.slice(22)}`);
    console.log("------------------------------------------------------------------------------------");
    console.log(`9.Check, is string ends with word "up" after step 3`);
    //console.log(`${afterRemovingSpace.endsWith("up")}`);
    if(afterRemovingSpace.endsWith("up")){
        console.log(`given string is ends with "up"`);
    }
    console.log("------------------------------------------------------------------------------------");
    console.log(`Check is strings with word "Hey" after trimming`);
    if (afterRemovingSpace.startsWith("Hey")) {
        console.log(`Given String is Starts with "Hey"`);
    }

}
stringHandsOn()

