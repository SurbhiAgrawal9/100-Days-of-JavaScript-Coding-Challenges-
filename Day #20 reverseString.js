// reverse the String without using built-in method or libraries 
function reverseString(str){
    let r_str = " ";
    for(let i=str.length -1;i>=0;i--){
        r_str = r_str + str[i];
    }
    return r_str
}

console.log(reverseString("hello"))
