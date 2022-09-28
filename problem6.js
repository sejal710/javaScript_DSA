// Given an integer array nums where every element appears three times except for one, 
// which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and 
// use only constant extra space.

function singleNumber2(nums){
    nums = nums.sort(function (a,b){
        return a - b;
    });
  
  for (let i = 0; i < nums.length; i += 3) {
       if (nums[i] != nums[i + 1]) {
            return nums[i];
       }
    }
}

let x = [2,2,3,2]
console.log(singleNumber2(x));
// Output --> 3
let y = [0,1,0,1,0,1,99]
console.log(singleNumber2(y));
// Output --> 99