function truncateString(str, count){
    if(count <= 0){
        return str
    } else if(str.length > count){
             return str.slice(0, count).concat("...")
         }
}
console.log(truncateString("A-tisked a-tasked A green and yellow basket", 8))




// by ternary operator

function truncateString(str, count){
    return (count <=0)? str: str.slice(0,count).concat("...")
}
console.log(truncateString("A-tisked a-tasked A green and yellow basket", 0))
