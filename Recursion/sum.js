//  Find The Sum of an Array

function sum (arr,n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return arr[0];
    }
    let add = arr.shift()+ sum(arr,n-1)
    return add;
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(sum(arr,arr.length))

