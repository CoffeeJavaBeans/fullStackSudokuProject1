
function getRow(puzzle,rowIndex){
    /*return the row of index of 2d array passed in */
    let row = rowIndex;
    return puzzle[row];
}

function getColumn(puzzle, colIndex){
    /*return the column of index of 2d array passed in */
    let col = [];
    for(let i=0; i<9; i++){
        col.push(puzzle[i][colIndex]);
    }
    return col;
}

function getSection(puzzle, col,row){
    /*returns the quadrant in the array of each index.
      this should work for any grid with multiple of 
      square cols and rows in 3's. */
    let sec=[];
    let n=Math.floor(row/3);
    let m=Math.floor(col/3);
    for(let i=n*3; i<(n*3)+3; i++){
        for(let j=m*3; j<(m*3)+3; j++){
            sec.push(puzzle[i][j]);
        }
    }
    return sec;
}

function includes1to9(arr){
    /*doing any mutations to arr messes up dependent functions
      checking without using sort on arr */
    let tempIndexes=[];
    ans=false;
    for(let i=1; i<=9; i++){
        if(arr.indexOf(i) != -1){
        tempIndexes.push(arr.indexOf(i));
        }
    }
    tempIndexes.sort();
    tempIndexes=[...new Set(tempIndexes)];
    if(tempIndexes.length === 9){
        ans= true;
    }
    return ans;
}

function sudokuIsValid(puzzle){
    /* check each row to see if it has all 9 */
    let ans=true;
     for(let i=0; i<9; i++){
         if(!includes1to9(getRow(puzzle,i))){
             ans=false;
         }
     }
     /*check each col to see it it has all 9 */
     for(let j=0; j<9; j++){
         if(!includes1to9(getColumn(puzzle, j))){
             ans=false;
         }
         
     }
     /*check each 3x3 grid to see it it has all 9 */
    for(let n=0; n<9; n+=3){
        for(let m=0; m<9; m+=3){
             if(!includes1to9(getSection(puzzle,m,n))){
                 ans=false;
            }
        }
    }
    return ans;
}

function isSame(puzzle1,puzzle2){
    /* checks if two puzzles are the same */
    ans=true;
    for(let i=0; i<puzzle1.length;i++){
        for(let j=0; j<puzzle2.length; j++){
            if(puzzle1[i][j] !== puzzle2[i][j]){
                ans=false;
                break;
            }
        }
    }
    return ans;
}
