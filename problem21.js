// Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where 
// colors[i] is the color of the ith balloon.

// Alice wants the rope to be colorful. She does not want two consecutive 
// balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful.
//  You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

// Return the minimum time Bob needs to make the rope colorful.

function minimumTimetoMakeRopeColorful(s,cost){
    let res = 0;
    let max = 0;
  for (let i = 0; i < s.length; i++) {
      res += cost[i];
      max = Math.max(max, cost[i]);
      if(s[i] !== s[i + 1]) {
         res -= max;
         max = 0;
        }
    }
  return res;
}
let x =minimumTimetoMakeRopeColorful;
let  colors = "abaac", neededTime = [1,2,3,4,5];
console.log(x(colors,neededTime));
// Output: 3
// Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
// Bob can remove the blue balloon at index 2. This takes 3 seconds.
// There are no longer two consecutive balloons of the same color. Total time = 3.


colors = "abc", neededTime = [1,2,3]
console.log(x(colors,neededTime));
//  Output: 0
// Explanation: The rope is already colorful. 
// Bob does not need to remove any balloons from the rope.

colors = "aabaa", neededTime = [1,2,3,4,1];
console.log(x(colors,neededTime));
// Output: 2
// Explanation: Bob will remove the ballons at indices 0 and 4.
//  Each ballon takes 1 second to remove.
// There are no longer two consecutive balloons of the same color. 
// Total time = 1 + 1 = 2.