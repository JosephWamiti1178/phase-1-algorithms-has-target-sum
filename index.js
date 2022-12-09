function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate over the array of numbers
  for(let i = 0; i<array.length; i++){
    //for the current number, identify a complementary number that adds to our target
  //example is if our number is 2 and target is 5, the complementary number is 3
    const complement = target-array[i];
  //iterate over the remaining numbers in the array
    for(let j= i+1; j<array.length; j++){
    //check if any of the remaining number is the complement
    //if so, return true
      if(array[j] ===complement)return true;

   }
  }
  //if we reach the end of the array, return false
   return false;


}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a comnplementary mumber that adds to our target
  example is if our number is 2 and target is 5, the completary number is 3
  iterate over the remaining numbers in the array
    check if any of the remaining number is the complement
       if so, return true
  if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here
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
