// We partition a row of numbers A into exactly K adjacent (non-empty) groups, then our score is the sum of the products of each group.

// What is the largest score we can achieve?

// Note
// Partition must use every number in A. The numbers in each group must be adjacent in A

// Example:
//     Input: 
//     A = [9,1,2,3,9]
//     K = 3
//     Output: 64
//     Explanation: 
//     The best choice is to partition A into [9], [1], [2, 3, 9]. The answer is 9  + 1 + 2 * 3 * 9 = 64.
//     We could have also partitioned A into [9], [1, 2, 3], [9], for example.
//     That partition would lead to a score of 9 + 6 + 9 = 24, which is lower.
function largestSum(numberArray,k){
  if(k===1){
     return productOfEntries(numberArray);
   }
 for(let i=1;i<=numberArray.length-k+1;i++){
  return productOfEntries(numberArray.slice(0,i))+largestSum(numberArray.slice(i),k-1);
 }
}
function productOfEntries(array){
  return array.reduce((a, b) => a * b);
}
console.log(largestSum([9,1,2,3,9],3)===64);
console.log(largestSum([9,1,2,3,9],1)===486);
console.log(largestSum([9,1,2,3,9],2)===63);
console.log(largestSum([0,1,2,3,4],3)===25);
console.log(largestSum([0,1,2,3,4],2)===24);
console.log(largestSum([0,1,2,3,4],1)===0);
console.log(largestSum([0,1,2,3,4],1)===0);