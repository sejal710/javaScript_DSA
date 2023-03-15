// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

function intersectionOf2Darraay(nums1, nums2){
    let result = []
    for(let n of nums1){
        if(nums2.includes(n) && !result.includes(n)){
            result.push(n)
        }
       
    }
   return result 
}
let x = intersectionOf2Darraay;
let arr1 = [1,2,2,1];
let arr2 = [2,2];
console.log(x(arr1,arr2))
// Output:[2];

let  nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(x(nums1,nums2));
// Output: [4,9];