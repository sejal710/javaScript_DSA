let arr = [5,2,4,3,1];

let ans  = sortArray(arr,arr.length);
console.log(ans);

function sortArray(arr,n){
    if(n === 0 || n === 1){
        return arr;
    }
    for(let i=0;i<n-1;i++){
        if(arr[i] < arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return sortArray(arr,n-1);
}