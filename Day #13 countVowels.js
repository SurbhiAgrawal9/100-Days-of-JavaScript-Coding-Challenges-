// count the vowels  (both uppercase and lowercase)
function countVowels(str){
 let arr = str.split("")
   console.log(arr)
   let vowels = ['a','e','i','o','u'];
   
   let count = 0;
  for(let char of arr){
    //   console.log(char)
if(vowels.includes(char.toLowerCase())){
    count++;
}      
  }
   
   return count;
  
}
console.log(countVowels("helloo world"));
console.log(countVowels("The QuIck BroWn fOx"));
