// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

function toplitzMatrix(matrix){
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[0].length-1; j++) {
            if (matrix[i][j] !== matrix[i+1][j+1]) {
                return false;
            }
         }
    }
    return true;
}
let x = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
let y = toplitzMatrix;
console.log(y(x));
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

let z =[[1,2],[2,2]];
console.log(y(z));
// Output: false
// Explanation:
// The diagonal "[1, 2]" has different elements.