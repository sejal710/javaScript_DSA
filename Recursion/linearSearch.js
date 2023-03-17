
//  find the value which is equal to k

function linear(arr,n,k){
   if(n === 0){
    return "Value Not Found"
   }
   if(arr[0] === k){
    return `Value Found ${arr[0]}`
   }
   arr.shift();
   let p = linear(arr,n-1,k)
   return p;
}

let mat = [1,2,4,7,9],k=7;
console.log(linear(mat,mat.length,k));