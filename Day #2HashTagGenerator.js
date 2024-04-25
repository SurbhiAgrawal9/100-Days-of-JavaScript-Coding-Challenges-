




















//Third Way with charAt()

// 
function generateHash(str){
    if(str.length > 280 || str.trim() ===0){
        return false
    }
    str = str.split(" ")
strCpitalize = str.map((curElm) => 
    curElm.charAt(0).toUpperCase() + curElm.slice(1)
    
)
  // console.log(strCpitalize)
  newWord = `#${strCpitalize.join("")}`
return newWord
}


console.log(generateHash("my name is surbhi agrawal"));
