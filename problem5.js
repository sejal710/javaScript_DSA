// Given an array of integers nums containing n + 1 integers where each integer is in 
// the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and 
// uses only constant extra space.

function Duplicate_Number(nums){
    nums = nums.sort(function (a,b){
        return b-a;
    })
    for(let i =0; i<nums.length; i++){
        if(nums[i] == nums[i+1]){
            return nums;
        }
    }
}
let x = [1,3,4,2,2]
console.log(Duplicate_Number(x));
// Output --> 2
let y = [3,1,4,1,4];
console.log(Duplicate_Number(y));
// Output --> 4
