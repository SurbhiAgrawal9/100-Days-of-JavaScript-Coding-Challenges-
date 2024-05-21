// Find the minimum value of Array
function findMin(arr){
   arr = arr.sort((a,b)=> {
        if(a < b) return -1
    })
    return arr[0]
}
console.log(findMin([10,4,8,3]))


//with method

function findMin(arr){
return   Math.min(...arr)
}
console.log(findMin([20,2,5,10]))


//trial  
console.log(Math.min(...[20,2,5,-3,10,100,1,0]))    //0






// max value of array is also same as min 

function findMax(arr){
    
//   arr =  arr.sort((a,b) => {
//         if(a > b) return -1
//     })
//     return arr[0]
return Math.max(...arr)
}

console.log(findMax([20,4,30,2]))

console.log(Math.max(...[20,100,3,0]))
