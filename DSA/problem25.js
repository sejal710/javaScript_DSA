// Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, 
// and an integer k.

// Find a contiguous subarray whose length is equal to k that has
//  the maximum average value and return this value. 
//  Any answer with a calculation error less than 10-5 will be accepted.


function findMaxAverage(nums,k){
    let kSum = 0;
    for(let i=0;i<k;i++){
        kSum += nums[i];
    }
    let windowSum = kSum;
    for(let i=0;i<nums.length;i++){
        windowSum = windowSum + nums[i+k] - nums[i];
        // console.log(windowSum)
        if(windowSum > kSum){
             kSum = windowSum;   
        }
        // console.log(kSum);
    }
    console.log(kSum/k)
}
nums = [1,12,-5,-6,50,3], k = 4;
findMaxAverage(nums,k);
 