// write a program to generateHash to accomplish this task

//greter then 280 and string are not empty and contains only whitespace


//First way
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
