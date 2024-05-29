//find the number of repitations
let number = [1,2,2,3,4,5,2]
let counts = {};
for(let element of number){
    counts[element] = (counts[element] || 0 ) + 1 
}
console.log(counts)
