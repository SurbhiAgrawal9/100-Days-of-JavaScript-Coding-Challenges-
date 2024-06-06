//repeat a string ( which takes two parameter)

function repeatString(str, num){
    return  num > 0 ? str.repeat(num): str;
}
console.log(repeatString("abc", 5))
console.log(repeatString("hello", 0))
