// string start with specific substring. 
// with strtsWith method
function isStartWith(str, subStr){
    return str.toLowerCase().startsWith(subStr.toLowerCase());
}
console.log(isStartWith("Hello World" , "hello"));
console.log(isStartWith("Hello World" , "World"));




//another way


function isStartWith(str, subStr){
    return str.toLowerCase().slice(0, subStr.length) ===subStr.toLowerCase();
}
console.log(isStartWith("Hello World" , "hello"));
console.log(isStartWith("Hello World" , "World"));


