/**
 * 【题目19】
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
例如，如果输入如下4 X 4矩阵：
1 2 3 4 
5 6 7 8
9 10 11 12 
13 14 15 16 
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 * 
 */

 function printMatrix(matrix){
     if(matrix === null) return null;
     const rows = matrix.length;
     const cols = matrix[0].length;
     let start = 0;
     res = [];
     while(rows > start * 2 && cols > start * 2){
         res = res.concat(printMatrixInCircle(matrix,rows,cols,start));
         start++;
     }
     return res;
 }

 function printMatrixInCircle(matrix,rows,cols,start){
     const endX = cols - 1 - start;
     const endY = rows - 1 - start;
     res = [];
     //从左往右
     for(let i = start;i <= endX;i++){
         res.push(matrix[start][i]);
     }
     //从上往下,至少两行
     if(start < endY){
        for(let i = start +1 ; i <= endY;i++){
            res.push(matrix[i][endX])
         }
     }
   
     //从右往左,至少两行两列
     if(start < endX && start < endY  ){
        for(let i = endX - 1; i >= start;i-- ){
            res.push(matrix[endY][i]);
        }
     }
    
     //从下到上,至少三行两列
     if(start < endX  && start < endY - 1  ){
        for(let i = endY-1;i>=start+1;i--){
            res.push(matrix[i][start]);
        }
     }
    
     return res;
 }