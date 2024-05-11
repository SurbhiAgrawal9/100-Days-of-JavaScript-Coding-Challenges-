

function isPalindrom(str){
    str = str.toLowerCase().replace(/\W/g, "");    //       \W   capital W matches any non-word character 
    let r_str = str.split("").reverse().join("")
    console.log(r_str)
  return  str === r_str ? true: false;
    // return r_str
    
}

console.log(isPalindrom("A man, a plan, a canal, panama"));

console.log(isPalindrom("racecar"));
console.log(isPalindrom("hello"))
