//calculate mean (average)

function calculateMean(arr){
    if(arr.length ===0){
        return 0
    }
    let sum = arr.reduce((accum, currElm) => accum + currElm, 0)
    return sum
}

console.log(calculateMean([2,5,10,6]))
console.log(calculateMean([]))
