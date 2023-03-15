// Given an m x n matrix mat, return an array of all 
// the elements of the array in a diagonal order.
function diagonalTraversal(mat){
    let m=mat.length,n=mat[0].length;
    let res=[];
    let row=0,col=0;
    for(let i=0;i<m+n-1;i++){
        if(i%2==0){
            while(row>=0 && col<n){
                res.push(mat[row--][col++]);
            } 
            row++;
            if(col==n){
                row++;
                col=n-1;
            }
        }else{
            while(col>=0 && row<m){
                res.push(mat[row++][col--]);
            }
            col++;
            if(row==m){
                row=m-1;
                col++;
            }
        }
    }
    console.log(res)
}

let x = [[1,2,3],[4,5,6],[7,8,9]];
diagonalTraversal(x);
// Output: [1,2,4,7,5,3,6,8,9]