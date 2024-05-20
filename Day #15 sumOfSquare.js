//calculate sum of square of all element in aaray
function sumOfSquare(arr){
return arr.reduce((accum, currElm) => accum = accum + (currElm * currElm),0);
}

console.log(sumOfSquare([1,2,3]))   


//another approch

const sumOfSquare = (arr) => {
    let sum = 0;
  for(let ele of arr){
      sum = sum + (ele * ele);
}
  return sum;
}
console.log(sumOfSquare([1,2,3]))
