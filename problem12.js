// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.
function missingNumber(nums){
    let sum = 0, total = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i + 1
    }
    console.log(total-sum);
}
let x = [3,0,1]
missingNumber(x);
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
//  2 is the missing number in the range since it does not appear in nums.

let y = [1,2,0,3];
missingNumber(y);
// Output: 4
