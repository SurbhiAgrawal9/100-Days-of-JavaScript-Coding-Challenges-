//check Triangle type 

function checkTriangleTypes(a,b,c){
    
    if(a===b && b===c) return "equilateral";
    if(a===b || b===c || a===c) return "isoceles";
    return "scalene"

}
console.log(checkTriangleTypes(2,2,2));
console.log(checkTriangleTypes(3,2,3));
console.log(checkTriangleTypes(3,4,5));
