
let grid =function makeGrid(){
    /*make unsolved sudoku board */
    let g=createSudokuBoard();
    return g;
}();

console.log(grid);
console.log(" ");


let solved=function solvedGrid(grd){
    /*Solve created sudoku board */
    //let clone=grd.slice(0); slice won't create a deep copy and resolves grid
    let clone=[...Array(9)].map(x=>Array(9).fill(0));
    for(let i=0;i<9;i++){
        for(let j=0; j<9; j++){
            clone[i][j] = grid[i][j];
        }
    }
    solveSudoku(clone);
    return clone;
}(grid);

console.log(solved);

function choseColor(number){
    /*Make colors for numbers*/
    let c="white";
    if(number === 1){
        c="red";
    }
    if(number === 2){
        c="green";
    }
    if(number === 3){
        c="blue";
    }
    if(number === 4){
        c="purple";
    }
    if(number === 5){
        c="pink";
    }
    if(number === 6){
        c="orange";
    }
    if(number === 7){
        c="yellow";
    }
    if(number === 8){
        c="whiteSmoke";
    }
    if(number === 9){
        c="deepPink";
    }
    return c;
    
}

for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        let s=`box${i}${j}`;
        console.log(s);
        document.getElementById(s).style.backgroundColor = (choseColor(grid[i][j]));
        document.getElementById(s).innerHTML = grid[i][j];
    }
}

function solveOneBoxOnClick(elementIdNo){
    let i=Number(elementIdNo[3]);
    let j=Number(elementIdNo[4]);
    document.getElementById(elementIdNo).style.backgroundColor = (choseColor(solved[i][j]));
    document.getElementById(elementIdNo).innerHTML = solved[i][j];
    /*alert("Why?");*/
}



////////////////sudoku board///////////////////
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


function fillInGrid(puzzle,row,col,arr){
    /* Fills in a 3x3 gid with array passed in  */
    let n=Math.floor(row/3);
    let m=Math.floor(col/3);
    let k=0;
    for(let i=n*3; i<(n*3)+3; i++){
        for(let j=m*3; j<(m*3)+3; j++){
            puzzle[i][j] = arr[k];
            k++;
           }
       }
}

function makeRandomArray(){
    /*returns an array with numbers 1 to 9 filled randomly */
    let arr=[0,0,0,0,0,0,0,0,0];
    for(let i=1; i<=9; i++){
        let temp=Math.floor(Math.random()*8); //generate random indexes
        if(arr[temp] === 0){
            arr[temp] = i;
        }else{
            let nextOpen = arr.indexOf(0);
            arr[nextOpen] =i;
        }
    }
    return arr;
}

function createSudokuBoard(){
    /*returns a suduko board */
    let board=[...Array(9)].map(x=>Array(9).fill(0));
    for(let i=0; i<9; i+=3){
        fillInGrid(board,i,i,makeRandomArray());
    }
    solveSudoku(board);
    for(let n=0; n<45;n++){ //randomly put zeros back in
        let i=Math.floor(Math.random()*8); //generate random indexes
        let j=Math.floor(Math.random()*8); //generate random indexes
        board[i][j] = 0;
    }
    return board;
}

