function findMedian(arr){
    let Sarr =arr.sort((a,b) => a-b)
    let length = Sarr.length
    let mid = Math.floor(length/2)
    
    return mid
}
console.log(findMedian([5,3,9,1,7]))
