// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
function lengthLastWord(str){
    let l=0;
    for (let i =str.length -1; i>=0; i--) {
        if (str[i] != ' ') {
            l++;
        }
        if (str[i] == ' ' && l>0) {
            return l;
        }
    }
    return l;
}
let x = "Hello World";
console.log(lengthLastWord(x));
// Output: 5
// Explanation: The last word is "World" with length 5.

let y ="   fly me   to   the moon  ";
console.log(lengthLastWord(y));
// Output: 4
// Explanation: The last word is "moon" with length 4.