// Given an integer array nums, 
// return true if any value appears at least twice in the array, 
// and return false if every element is distinct.
function containDuplicate(nums){
    let obj ={};
    for(let k of nums){
        if(obj[k]){
            obj[k]++;
        }
        else{
            obj[k] =1;
        }
        if(obj[k]>=2){
            return true;
        }
        
    }
    return false;
}
let x = [1,1,1,3,3,4,3,2,4,2];
let y = containDuplicate;
console.log(y(x))
// Output: true


let z =[1,2,3,4];
console.log(y(z));
// Output: false