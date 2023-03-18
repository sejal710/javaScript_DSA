
function power(a,b){

    if(b === 0) return 1;

    if (b === 1) return a;

    let ans = power(a,Math.floor(b/2));

    if(b%2 === 0){
        return ans*ans;
    }
    else{
        return a*ans*ans;
    }
}

let ans = power(3,3);
console.log(ans);