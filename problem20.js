// You are given a sorted array consisting of only integers where
// every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space

function singleElementInSortedArray(nums){
    for (let i = 1; i <= nums.length; i += 2) {
        if (nums[i] !== nums[i - 1]){
             return nums[i - 1];
        }   
    }
}
let x =singleElementInSortedArray;
let arr = [1,1,2,3,3,4,4,8,8];
console.log(x(arr));
// Output: 2
let mat = [3,3,7,7,10,11,11];
console.log(x(mat));
// Output: 10