var arr=[]; 
for(var i=1;i<=5;i++){
var x=Number(prompt("enter a number"));
arr.push(x);
}
console.log(arr);
 
let lowestToHighest = arr.sort((a, b) => a - b);
console.log(lowestToHighest);
let highestToLowest = arr.sort((a, b) => b-a);
console.log(highestToLowest);