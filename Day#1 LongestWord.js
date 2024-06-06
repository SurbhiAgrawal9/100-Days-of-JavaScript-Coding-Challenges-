//find the longestword that take a string as input and return the longest word in the string .
function findlongestword(str){
    
    if(str.trim().length === 0){              //trim remove the space from first and last 
        console.log("try again")
        return false
    }
        
    let words = str.split(" ").sort((a,b) => a.length - b.length)      
    console.log(words)
    let longstr = words.at(-1)     // at(-1) use for last index
    console.log( longstr);
    
    
    
    
}


// findlongestword("this is string find the longest string word with the help of javascript")
findlongestword("  ")
