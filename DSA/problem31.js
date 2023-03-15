// Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
//  DO NOT allocate another 2D matrix and do the rotation.

function rotateImage(matrix){
     matrix.reverse();
     let  n = matrix.length;
     // transpose
     for (let i = 0; i < n; i++) {
          for (let j = 0; j < i; j++) {
              [ matrix[i][j],matrix[j][i]]  = [matrix[j][i],matrix[i][j]];
            }
        }
        console.log(matrix);
}
let arr = [[1,2,3],[4,5,6],[7,8,9]];
rotateImage(arr);
// Output: [[7,4,1],[8,5,2],[9,6,3]]


arr = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotateImage(arr)
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]