let arr = [4,3,6,12,5,2,1];
let ans = mergeSort(arr);
console.log(ans,arr)

function mergeSort(arr){
   if(arr.length < 2) return arr;
   let mid = Math.floor(arr.length/2);

   let left = arr.slice(0,mid)
   let right = arr.slice(mid);

   return merge(mergeSort(left),mergeSort(right));
}


function merge(left,right){
    let sortArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortArr.push(left.shift());
        }else{
            sortArr.push(right.shift())
        }
    }

    let arr = [...sortArr,...left,...right];
    return arr;
}

