// convert a string to camelCase 

function toCamelCase(str){
    str = str.trim().split(" ");
    // console.log(str)
   str =  str.map((currElm, index) => {
        if(index === 0 ){
            
        return currElm;
        }else {
            return currElm.charAt(0).toUpperCase() + currElm.slice(1).toLowerCase();
        }
    })
    //   console.log(str.join(""))
    return str.join("")
}

console.log(toCamelCase("hello teachnical woRld "))
