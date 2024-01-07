function oddPositionedChars(str){
    let str1="";
    for (let index = 0; index < str.length; index++) {
     let char = str.charAt(index);
     if (index % 2 != 0) {
         if(char == " "){
             continue;
         }  
         console.log(char);
         
         str1+=char+"";
          
     }  
    
    }
    console.log(str1); 
    
 }

 oddPositionedChars("Soon I will be UI IT Champ");