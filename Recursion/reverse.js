function reverse(arr,i,j){
   if(i>j) return arr;
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   i++;
   j--;
   return reverse(arr,i,j)
}

let  k = "abcdefghi".split(""),i=0,j=k.length-1;
let ans = reverse(k,i,j)
console.log(ans)