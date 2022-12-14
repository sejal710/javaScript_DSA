// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type

function validPalindrome(s){
    let arr = [];
	
	for (let c of s) {
		if (c === '(')
			arr.push(')');
		
		else if (c === '{')
			arr.push('}');
		
		else if (c === '[')
			arr.push(']');
		
		else if (arr.length === 0 || arr.pop() !== c)
			return false;
	}
	
	return (arr.length === 0);
}

let x = validPalindrome
let str = "()";
console.log(x(str));
// Output: true;
 
str = "{]";
console.log(x(str));
// Output: false