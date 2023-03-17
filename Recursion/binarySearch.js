
function binary(arr,n,s,k){

    if(s >= n){
        return "Not Present"
    }
    let mid = Math.floor(s+(n-s)/2);
    if(arr[mid] < k){
        return binary(arr,n,mid+1,k)
    }
    else if(arr[mid] > k){
        return binary(arr,mid-1,s,k);
    } 
    else{
        return "Value is Present"
    }
}





let mat = [1,3,5,8,10,12,15];
let k = 8,s=0;
let p = binary(mat,mat.length,s,k);
console.log(p);

let arr = [1,5,7,10,12,19];
let h = 20
console.log(binary(arr,arr.length,s,h))