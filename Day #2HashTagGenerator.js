// write a program to generateHash to accomplish this task

//greter then 280 and string are not empty and contains only whitespace

//First way with slice()

function generateHash(str){
    str = str.split(" ")
strCpitalize = str.map((curElm) => 
    curElm[0].toUpperCase() + curElm.slice(1)
    
)
   console.log(strCpitalize)
  newWord = `#${strCpitalize.join("")}`
console.log(newWord)
}


generateHash("my name is surbhi agrawal");


// second way with replace() with condition

function generateHash(str){
    if(str.length > 280 || str.trim() ===0){
        return false
    }
    str = str.split(" ")
strCpitalize = str.map((curElm) => 
    curElm.replace(curElm[0], curElm[0].toUpperCase())
    
)
  // console.log(strCpitalize)
  newWord = `#${strCpitalize.join("")}`
return newWord
}


console.log(generateHash("my name is surbhi agrawal"));



//Third Way with charAt()


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
