// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix 
// into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing 
// the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original 
// matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, 
// output the new reshaped matrix; Otherwise, output the original matrix.

function reshapeTheMatrix(arr,r,c){
    let  m = mat.length;
    let n = mat[0].length;
    let res = [];
    
    if (m * n != r * c){
       console.log(mat)
    } 
    else {
         for (let i = 0; i < r; i++) {
        res[i] = new Array(c).fill(0);
    }
    // console.log(res)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let pos = (i * n) + j;
            let row = Math.floor(pos / c);
            let col = pos % c;
            
            res[row][col] = mat[i][j];
        }
    }
    
    console.log(res)
    }
}

let mat = [[1,2],[3,4]];
r = 1;
c = 4;
reshapeTheMatrix(mat,r,c);
// Output: [[1,2,3,4]]

let matrix = [[1,2],[3,4]];
r = 2;
c = 4;
reshapeTheMatrix(matrix,r,c);
// Output: [[1,2],[3,4]]