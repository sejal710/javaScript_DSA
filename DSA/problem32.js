// Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

function spiralMatrix(matrix){
    if(matrix.length < 1 || matrix[0].length < 2) return matrix
    let spiral =[]
    let left = 0
    let right = matrix[0].length-1
    let top = 0
    let bottom = matrix.length-1
    while(top<= bottom && left <= right) {
        for(let i = left ; i<=right ; i++) {
            spiral.push(matrix[top][i])
        }
        if(top == bottom) break
        for(let i = top+1;i<=bottom;i++) {
            spiral.push(matrix[i][right])
        }
        for(let i = right-1;i>=left;i--) {
            spiral.push(matrix[bottom][i])
        }
        if(left == right) break      
        for(let i = bottom-1;i>=top+1;i--){
            spiral.push(matrix[i][left])
        }
        left++;
        right--;
        top++
        bottom--
    }
    console.log(spiral)  
}
let mat =[[1,2,3],[4,5,6],[7,8,9]];
spiralMatrix(mat);
// Output: [1,2,3,6,9,8,7,4,5]

let arr =[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
spiralMatrix(arr);
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
