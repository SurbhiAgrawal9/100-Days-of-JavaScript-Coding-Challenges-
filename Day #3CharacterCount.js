
//write a function called countChar that take two parameter: a string and a character to count, the function should return the number of time the specified character appears in the string


function charCount(word, char){
   
    word = word.toLowerCase();
    char = char.toLowerCase();


  //reduce for return single value
  totalCount = word.split("").reduce((accum, curChar) => {
        if(curChar === char){
            accum++;
        }
         return accum
    },0)
      
    
    
   return totalCount
    
}

console.log(charCount("missIsippi" , "I"))
