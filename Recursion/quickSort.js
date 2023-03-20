
function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [2,5,1,6,9];
let ans = quickSort(arr);
console.log(ans);


