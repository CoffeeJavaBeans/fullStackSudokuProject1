function findEmptyLocation(puzzle,emptySpotij){
    /*Searches the puzzle to find an unnasigned place.
    If found, emptySpotij is set to the i,j the indexes
    of the empty spot and returns true. If no empty
    spots are found, returns false */
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(puzzle[i][j] === 0){ //position of first empty spot found
                emptySpotij[0]=i;
                emptySpotij[1]=j;
                return true; //empty spot found
            }
        }
    }
    return false; //no empty spots available
}

function usedInRow(puzzle, row, number){
    /* checks the row of the puzzle if number is
       used in it yet. Returns true if used, false
       if unused.  */
    for(let i = 0; i<9; i++){
        if(puzzle[row][i] === number){
            return true; //number is found
        }
    }
    return false; //number is not found.
}

function usedInCol(puzzle,col,number){
    /* checks the col of the puzzle if number is
       used in it yet. Returns true if used, false
       if unused.  */
    for(let i=0; i<9; i++){
        if(puzzle[i][col] === number){
            return true;  //number is found
        }
    }
    return false; //number is not found
}

function usedInGrid(puzzle,row,col,number){
    /* checks the 3x3 grid of the puzzle if number is
       used in it yet. Returns true if used, false
       if unused.  */
    let n=Math.floor(row/3);
    let m=Math.floor(col/3);
    for(let i=n*3; i<(n*3)+3; i++){
        for(let j=m*3; j<(m*3)+3; j++){
            if(puzzle[i][j]===number){
                return true; //number is found
                }
           }
       }
    return false; //number is not found
}

function checkLocationIsSafe(puzzle,row,col,number){
    /*uses usedInRow(), usedInCol, usedInGrid to check
    and see if it is safe to place a number on the puzzle */
    if(!usedInRow(puzzle,row,number)&&!usedInCol(puzzle,col,number)&&
       !usedInGrid(puzzle,row,col,number)){
        return true; //all of these are true (number not found) 
    }
    return false;
}

function solveSudoku(puzzle){
    /*use backtracking algorithm to finish solving a
    partially filled sudoku puzzle. This relies on outside
    functions to work */
    let spot=[0,0]; //is mutated by findEmptyLocation
    let el = findEmptyLocation(puzzle,spot);
    if(!el){
        return true; //All locations have been filled in and we are done solving.
    } 
    let row=spot[0];
    let col=spot[1];
    for(let num = 1; num <= 9 ; num++){ //sudoku number choices
        //it looks promising
        if(checkLocationIsSafe(puzzle, row, col, num)){
            //make tenative assignment
            puzzle[row][col] =num;
            //return true if successful
            if(solveSudoku(puzzle)){
                return true;
            }
            //failure try again
            puzzle[row][col] =0; 
        }
    }
    return false; //triggers backtracking
}

function makeItHappen(puzzle){
    /*run solve sudoku*/
    
    if(solveSudoku(puzzle)){
        console.log(puzzle);
        return puzzle;
    }else{
        console.log("no solutions exist or something went wrong");
        return [];
    }

}

innergrid=[[3,0,6,5,0,8,4,0,0], 
          [5,2,0,0,0,0,0,0,0], 
          [0,8,7,0,0,0,0,3,1], 
          [0,0,3,0,1,0,0,8,0], 
          [9,0,0,8,6,3,0,0,5], 
          [0,5,0,0,9,0,6,0,0], 
          [1,3,0,0,0,0,2,5,0], 
          [0,0,0,0,0,0,0,7,4], 
          [0,0,5,2,0,6,3,0,0]] ;

makeItHappen(innergrid);

unsolvedPz=
            [[1,0,2,4,8,9,3,7,6], 
            [7,3,9,2,0,6,8,4,1], 
            [4,6,8,3,7,1,2,9,5], 
            [3,8,7,1,2,4,6,5,9], 
            [5,9,1,7,6,3,4,2,8], 
            [2,4,6,8,9,5,7,1,3], 
            [9,1,4,6,3,7,5,8,2], 
            [6,2,5,9,4,8,1,3,7], 
            [8,7,3,5,1,2,9,6,0]]; 
makeItHappen(unsolvedPz);
