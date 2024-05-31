find the mode in Array  (most frequently number )
function findMode(arr){
    let counts = {};
    let maximum = 0;
    let mode ;
    
    
    for(let element of arr){
        counts[element]  = (counts[element] || 0) + 1
        if(counts[element] > maximum){
            maximum = counts[element];
            mode = element    // actual key 
        }
    }
    console.log(counts)
     return mode;
}
console.log(findMode([1,2,2,3,1,4,2]))
