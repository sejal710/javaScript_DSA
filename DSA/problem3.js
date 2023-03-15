// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""


function longestCommon(strs) {
    let str ='';
   for(let i=0; i<strs[0].length; i++){
       let flag = true;
       let char;
      for(let j=0; j<strs.length; j++){ 
           char=strs[j][i]; 
           if(j<(strs.length-1) && char !== strs[j+1][i]){
              flag= false;
               break;
           }
      }
      if(flag === true){ 
         str += char; 
       }
      else{
         break; 
        }
   }
   return str;
}
let strs = ["flower","flow","flight"];
console.log(longestCommon(strs));