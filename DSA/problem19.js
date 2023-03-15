// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

function happyNumber(n){
    let slow = fast = n;
    while (true) {
      slow = sq(slow);
      fast = sq(sq(fast));
      if (slow === fast) break;
    }
    
    return slow === 1;
  
} 
  function sq(num) {
    let sum = 0;
    while (num > 0) {
      let d = num % 10;
      sum += d * d;
      num = Math.floor(num/10);
    }
    return sum;
}

let n =19;
let x = happyNumber;
console.log(x(n));
// Output: true
// Explanation:
// 1**2 + 9**2 = 82
// 8**2 + 2**2 = 68
// 6**2 + 8**2 = 100
// 1**2 + 0**2 + 0**2 = 1
let num =2;
console.log(x(num))