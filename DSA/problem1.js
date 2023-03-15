
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


function palindrome(x){
   let sejal = Math.abs(x);
   let reversed = 0, lastDigit;
    if(sejal< 0){
        return false;
    }
    while(sejal > 0) {
        lastDigit = sejal % 10
        reversed = reversed * 10 + lastDigit
        sejal = Math.floor(sejal / 10)
    }
    return reversed === Math.abs(x) 
}
let x = 1221;
console.log(palindrome(x));   



