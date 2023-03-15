// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function sum3(nums){
    nums = nums.sort( (a,b) => a-b );
    
    let result = [];
    let sum=0;
    
    for(let i=0; i<nums.length; i++ ){
        
        let a = nums[i];
        
        if( i>0 && a==nums[i-1] ) 
            continue;
            
        let right = nums.length-1;
        let left = i+1;

        while(left<right) {

            sum = a + nums[left] + nums[right];

            if(sum > 0 )
                right--;
            
            else if(sum < 0 ) 
                left++
                
            else {
                
                result.push([a, nums[left], nums[right]]);
                
                left++;
                while(nums[left] == nums[left-1] && left<right)
                    left++;
                
            }

        }
        
    }
    return result;
}

nums = [-1,0,1,2,-1,-4];
console.log(sum3(nums))
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

Input: nums = [0,1,1];
console.log(sum3(nums))

// Output: []
// Explanation: The only possible triplet does not sum up to 0.


nums = [0,0,0];
console.log(sum3(nums))

// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.