//calculate the average  array of number as input and returns the average of those numbers.

function calculateAverage(arr){
     let total = arr.reduce((accum, currEle) => accum + currEle, 0)
     console.log(total)
     return total/arr.length;
    
}


console.log(calculateAverage([20,5,6,2,10]))
