// An image smoother is a filter of the size 3 x 3 
// that can be applied to each cell of an image by rounding down
// the average of the cell and the eight surrounding cells
// (i.e., the average of the nine cells in the blue smoother).
// If one or more of the surrounding cells of a cell is not present, 
// we do not consider it in the average (i.e., the average of the four cells in the red smoother).

function imageSmoother(img){
    let result = Array(img.length);
    
    for(let i = 0; i < result.length; i++) {
        result[i] = Array(img[0].length);
    }
    
    let checks = [
        [0, 0],
        [0, 1],
        [0, -1],
        [1, 0],
        [1, 1],
        [1, -1],
        [-1, 0],
        [-1, 1],
        [-1, -1],
        
    ]
    for(let i = 0; i < img.length; i++) {
        for(let j = 0; j < img[0].length; j++) {
            let sum = 0;
            let count = 0;
            
            for(let k = 0; k < checks.length; k++) {
                let [r, c] = checks[k];
                let row = r + i;
                let col = c + j;
                if (row >= 0 &&
                   row < img.length &&
                   col >= 0 &&
                   col < img[0].length) {
                    count++;
                    sum += img[row][col];
                }               
            } 
            // console.log(sum,count)  
            result[i][j] = Math.floor(sum/count);          
        }
    }
    
    return result; 
}
let y = imageSmoother;
let x = [[100,200,100],[200,50,200],[100,200,100]];
console.log(y(x));
// Output: [[137,141,137],[141,138,141],[137,141,137]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
// For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
// For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138