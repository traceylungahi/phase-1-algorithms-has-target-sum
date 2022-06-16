function hasTargetSum(array, target) {
  for(let a = 0; a < array.length; a++) {
    for(let b = a + 1; b < array.length; b++) {
      if(array[a] + array[b] === target) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Write a function that takes in an array of integers and a target integer as arguments
  If the sum of a pair of number in the array adds up to the target integer
     return true
     else
     return false
*/

/*
  Add written explanation of your solution here
  Solution has a function called hasTargetSum that receives an array of integers and a target integer as arguments. The function returns true if any pair of numbers in the array adds up to the target number. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
