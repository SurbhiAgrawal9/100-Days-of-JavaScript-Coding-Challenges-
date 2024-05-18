
function sumOfDigits(num){
    
    // let arr = Array.from(num)
    let arr = Array.from(String(num), Number)
    console.log(arr)
    return arr.reduce((accum, currEle) => accum + currEle, 0)
}



console.log(sumOfDigits(1234))
