
// Change romanNumber into a Number

function romanNumber(s){
    let symbols = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
    };
    let ans = 0;
    for(let i = 0 ; i < s.length ; i++){
      let curr = s[i] ;
      let nxt = s[i+1] ;
      if(symbols[curr]<symbols[nxt]){
         ans = ans + symbols[nxt] - symbols[curr] ;
          i++ ;
        }
     else{
         ans = ans + symbols[curr];
       }
    }
    return ans ;
}

let s ="LVIII";
console.log(romanNumber(s));



