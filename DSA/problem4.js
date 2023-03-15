// Given a non-empty array of integers nums, every element appears twice except for one.
//  Find that single one.
// You must implement a solution with a linear runtime complexity and
//  use only constant extra space.

function SingleNumber(num){
    num=num.sort(function(a,b){
        return b-a;
    })
    var last = num[num.length-1];
    for(let i=0;i<=num.length-2;i+=2){
        if(num[i]!==num[i+1]){
            return num[i]
        } 
    }
    return last;
}
let x = [4,1,2,1,2];
console.log(SingleNumber(x));
// Output --> 4
let y = [1];
console.log(SingleNumber(y));
// Output --> 1