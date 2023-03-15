// Given a string s, find the length of 
// the longest substring without repeating characters.
function longestRepChar(s){
    let k = 0;
    let maxLength = 0;
    for(let i = 0; i < s.length; i++) {
        for (let j = k; j < i; j++) {
            if (s[i] === s[j]) {
                k = j+1;
                break;
            }
        }
        if (i - k + 1 > maxLength) {
            maxLength = i - k + 1;
        }
    }
    return maxLength;
}
let x = "abcabcbb";
console.log(longestRepChar(x));
// Output: 3
// Explanation: The answer is "abc", with the length of 3. 
let y = "pwwkew";
console.log(longestRepChar(y));
// Output: 3
// Explanation: The answer is "wke", with the length of 3.