function removeDublicate(arr){
     let newArr = new Set(arr)
     return  [...newArr];
}
console.log(removeDublicate([2,4,3,4,6,8,2]))     // [ 2, 4, 3, 6, 8 ]
console.log(removeDublicate([2,4,10,406,10,2]))   //  [ 2, 4, 10, 406 ]
console.log(removeDublicate([]))   // []



// same approch but diffrent way 

function removeDublicate(arr){
     let newArr = new Set(arr)   // Set(5) { 2, 4, 3, 6, 8 }     given object 
 //    let newArr = [new Set(arr)]  // [ Set(5) { 2, 4, 3, 6, 8 } ]  given array with length
   // let newArr = [ ...new Set(arr)]  // [ 2, 4, 3, 6, 8 ]     only array element
     return newArr;  
}
console.log(removeDublicate([2,4,3,4,6,8,2])) 

