console.log("=======================Step 1=========================================================================");
function squareOfWorldLenght(word){
    var word1=word;
    var wordLenght=word1.length;
    var square=wordLenght*wordLenght;
    return console.log(`lenght of given word is: ${wordLenght}\nSquare lenght of Given word is:${square}\n`);


} 
squareOfWorldLenght("JavaScript");
squareOfWorldLenght("Google Chrome");
squareOfWorldLenght("Developer Smart")

console.log("======================Step 2=========================================================================");
function string1() {
    var sentence="I am Angular Developer"
    var sentenceLenght=sentence.length
    var sentenceWord=sentence.split(" ")
    var lenghtWord=sentenceWord.length
    console.log(`Total Number of Character at "I am Angular Developer" is:${sentenceLenght}`);
    console.log(`Total Number of word at "I am Angular Developer" is:${lenghtWord}`);
    console.log(`\n2.1)String lenght divided by total Number of word Available in the String is ${sentenceLenght/lenghtWord}`);
    console.log(`2.2) String lenght and Multiple by the total words available in string ${sentenceLenght*lenghtWord}`);
         
}
string1()



