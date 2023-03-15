// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed.
//  If reversing x causes the value to go outside the signed 
//  32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverseInteger(x){
    let val;
    val= parseInt(x.toString().split("").reverse().join(""));
    if(val > Math.pow(2, 31)){
       return 0;
    }else{
        if(x<0){
           return val * (-1);
        }
    }
    return val;
}
let y = reverseInteger 
x = 123;
console.log(y(x));
// Output: 321
x = -123
console.log(y(x));
// Output: -321

x = 120;
console.log(y(x));
// Output: 21