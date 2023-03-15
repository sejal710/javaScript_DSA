// 3Sum Closest
// Given an integer array nums of length n and an integer target,
// find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

function sum3closest(nums,target){
    nums.sort((a, b) => a-b);
    let res = nums[0] + nums[1] + nums[2];
    let gap = Math.abs(target - res);
    
    let i = 0;
    while(i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            const gap1 = Math.abs(target - sum);
            if (sum === target) {
                return sum;
            }
            
            if (gap1 < gap) {
                    gap = gap1;
                    res = sum;
            }
            
            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
        i++;
    }
    return res
}

nums = [-1,2,1,-4], target = 1;
let x = sum3closest;
console.log(x(nums,target));
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


nums = [0,0,0], target = 1;
console.log(x(nums,target));
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).