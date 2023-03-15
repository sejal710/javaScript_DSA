// Decode Ways
// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping 
// above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

function decodeWays(s){
  let nArr = new Array(s.length + 1).fill(0);
  nArr[0] = 1;
  for (let i = 1; i < nArr.length; i++) {
       if (s[i - 1] > 0) {
         nArr[i] += nArr[i - 1];
        }
        if (s[i - 2]) {
          let last2 = s[i - 2] + s[i - 1];
           if (last2 >= 10 && last2 <= 26) {
              nArr[i] += nArr[i - 2];
            }
        }
    }
    return nArr[nArr.length - 1]
}
s = "12";
console.log(decodeWays(s));
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

s = "06";
console.log(decodeWays(s));

// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero 
// ("6" is different from "06").