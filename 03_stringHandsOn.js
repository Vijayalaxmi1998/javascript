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
    


}
stringHandsOn()

