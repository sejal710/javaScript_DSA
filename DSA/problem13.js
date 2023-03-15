// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

function majorityElement(nums){
    let obj = {};

	let maxElement = 0;
	let majority;

	for (let n of nums) {
      
		if (obj[n]) {
			obj[n]++;
		} else {
			obj[n] = 1;
		}

		if (obj[n] > maxElement) {
			maxElement = obj[n];
			majority = n;
		}
	}    
    console.log(majority)   
}

let x = [2,2,1,1,1,2,2];
majorityElement(x);
// Output: 2

let y = [3,2,3];
majorityElement(y);
// Output: 3
