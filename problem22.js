// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

function medianOfTwoSortedArray(nums1,nums2){
   let arr=[...nums1,...nums2];
   arr.sort((a,b)=>a-b);
   let len = Math.ceil(arr.length/2);
   if(arr.length%2==0){
       return (arr[len-1]+arr[len])/2;
   }else{
       return arr[len-1];
   }
}
let x = medianOfTwoSortedArray;
let  nums1 = [1,3], nums2 = [2];
console.log(x(nums1,nums2));
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

nums1 = [1,2], nums2 = [3,4];
console.log(x(nums1,nums2));
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.