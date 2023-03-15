 
// Suppose an array is given find the sorted array

function sort(arr,n){
    if(n == 0 || n == 1){
        return "Sorted Array"
    }
    if(arr[0] > arr[1]){
        return "Oops Not Sorted"
    }
    else{ 
        
    return sort(arr,n-1)
    }
}

let mat = [1,2,4,7,9];
console.log(sort(mat,mat.length));

let arr = [2,3,6,1];
console.log(sort(arr,arr.length))