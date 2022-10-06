// Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with
//  elements from 1 to n2 in spiral order.

function spiralMatrix(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        let row = [];
        for(let j = 0; j < n; j++){
            row.push([]);
        }
        arr.push(row);
    }
    
    
    let up = 0, down = n - 1, left = 0, right = n - 1;
    let count = 1;
	
    while(up <= down && left <= right){
        if(up === down && left === right){
            arr[left][up] = count;
        }

        for(let i = left; i < right; i++){
            arr[up][i] = count++;
        }

        for(let i = up; i < down; i++){
            arr[i][right] = count++;
        }

        for(let i = right; i > left; i--){
            arr[down][i] = count++;
        }
        
        for(let i = down; i > up; i--){
            arr[i][left] = count++;
        }
        
        up++;
        down--;
        left++;
        right--;
    }
    
    console.log(arr);
}

n = 3
spiralMatrix(n)
// Output: [[1,2,3],[8,9,4],[7,6,5]]

n = 1
spiralMatrix(1);
// Output: [[1]]