// Given a string s, return the longest palindromic substring in s.

// A string is called a palindrome string if the reverse of that string is the 
// same as the original string.

function longestPalindrome(s){
    for (let m=s.length;m>0;m--) {
        let i=0,j= m;
        while (j<= s.length) {
            let substr =s.substring(i,j);
            if (isPalindrome(substr)) {
                return substr;
            }
            else{
            i++;
            j++;
        }
        }
    }
    return "";
}

let isPalindrome = function(s) {
    let l = 0, r = s.length-1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        else{
        l++, r--;
    }
    }
    return true;
}
let x = longestPalindrome;
let str="babad";
console.log(x(str));
// Output: "bab"
// Explanation: "aba" is also a valid answer.
 let p = "cbbd";
 console.log(x(p));
//  Output: "bb"