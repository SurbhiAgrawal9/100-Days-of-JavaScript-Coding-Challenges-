// check the charater is uppercase or lowercase.   
// note:-  character based on their ASCII
function isUpperCase(char){
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }
    else {
        return false;
    }
}
console.log(isUpperCase("S"));
console.log(isUpperCase("A"));
console.log(isUpperCase("i"));
console.log(isUpperCase(" "));
