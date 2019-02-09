describe('findEmptyLocation', ()=>{

    it('returns a function', ()=> {
      expect(typeof findEmptyLocation).toEqual('function');
    })

    it('returns false if all values assigned', ()=>{
      solvedPz=
      [[3,1,6,5,7,8,4,9,2], 
      [5,2,9,1,3,4,7,6,8], 
      [4,8,7,6,2,9,5,3,1], 
      [2,6,3,4,1,5,9,8,7], 
      [9,7,4,8,6,3,1,2,5], 
      [8,5,1,7,9,2,6,4,3], 
      [1,3,8,9,4,7,2,5,6], 
      [6,9,2,3,5,1,8,7,4], 
      [7,4,5,2,8,6,3,1,9]]; 
      let returnedValue = findEmptyLocation(solvedPz);
      expect(returnedValue).toEqual(false);
    });

    it('returns true if place available', ()=>{
      spot=[0,0];
    unsolvedPz=
        [[3,0,6,5,0,8,4,0,0], 
          [5,2,0,0,0,0,0,0,0], 
          [0,8,7,0,0,0,0,3,1], 
          [0,0,3,0,1,0,0,8,0], 
          [9,0,0,8,6,3,0,0,5], 
          [0,5,0,0,9,0,6,0,0], 
          [1,3,0,0,0,0,2,5,0], 
          [0,0,0,0,0,0,0,7,4], 
          [0,0,5,2,0,6,3,0,0]] ;
    let returnedValue = findEmptyLocation(unsolvedPz,spot);
    expect(returnedValue).toEqual(true);
   });

});

describe('usedInRow', ()=>{

  it('returns a function', ()=> {
    expect(typeof usedInRow).toEqual('function');
  });

  it('returns true because the number is in the row', ()=>{
    rowPuz=
    [[3,1,6,5,7,8,4,9,2], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0]]; 
    let returnedValue = usedInRow(rowPuz,0,5);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if number not in row', ()=>{
  unsolvedPz=
      [[3,0,6,5,0,8,4,0,0], 
        [5,2,0,0,0,0,0,0,0], 
        [0,8,7,0,0,0,0,3,1], 
        [0,0,3,0,1,0,0,8,0], 
        [9,0,0,8,6,3,0,0,5], 
        [0,5,0,0,9,0,6,0,0], 
        [1,3,0,0,0,0,2,5,0], 
        [0,0,0,0,0,0,0,7,4], 
        [0,0,5,2,0,6,3,0,0]] ;
  let returnedValue = usedInRow(unsolvedPz,1,3);
  expect(returnedValue).toEqual(false);
 });

});

describe('usedInCol', ()=>{

  it('returns a function', ()=> {
    expect(typeof usedInCol).toEqual('function');
  });

  it('returns true because the number is in the col', ()=>{
    colPuz=
    [[3,0,0,0,0,0,0,0,0], 
    [1,0,0,0,0,0,0,0,0], 
    [6,0,0,0,0,0,0,0,0],  
    [5,0,0,0,0,0,0,0,0], 
    [7,0,0,0,0,0,0,0,0], 
    [8,0,0,0,0,0,0,0,0], 
    [4,0,0,0,0,0,0,0,0], 
    [9,0,0,0,0,0,0,0,0],  
    [2,0,0,0,0,0,0,0,0]]; 
    let returnedValue = usedInCol(colPuz,0,5);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if number not in row', ()=>{
  unsolvedPz=
      [[3,0,6,5,0,8,4,0,0], 
        [5,2,0,0,0,0,0,0,0], 
        [0,8,7,0,0,0,0,3,1], 
        [0,0,3,0,1,0,0,8,0], 
        [9,0,0,8,6,3,0,0,5], 
        [0,5,0,0,9,0,6,0,0], 
        [1,3,0,0,0,0,2,5,0], 
        [0,0,0,0,0,0,0,7,4], 
        [0,0,5,2,0,6,3,0,0]] ;
  let returnedValue = usedInCol(unsolvedPz,8,2);
  expect(returnedValue).toEqual(false);
 });

});

describe('usedInGrid', ()=>{

  it('returns a function', ()=> {
    expect(typeof usedInGrid).toEqual('function');
  });

  it('returns true because the number is in the grid', ()=>{
    colPuz=
    [[3,5,4,0,0,0,0,0,0], 
    [1,7,9,0,0,0,0,0,0], 
    [6,8,2,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0]]; 
    let returnedValue = usedInGrid(colPuz,2,2,5);
    expect(returnedValue).toEqual(true);
  });

  it('returns false if number not in grid', ()=>{
  unsolvedPz=
      [[3,0,6,5,0,8,4,0,0], 
        [5,2,0,0,0,0,0,0,0], 
        [0,8,7,0,0,0,0,3,1], 
        [0,0,3,0,1,0,0,8,0], 
        [9,0,0,8,6,3,0,0,5], 
        [0,5,0,0,9,0,6,0,0], 
        [1,3,0,0,0,0,2,5,0], 
        [0,0,0,0,0,0,0,7,4], 
        [0,0,5,2,0,6,3,0,0]] ;
  let returnedValue = usedInGrid(unsolvedPz,2,2,1);
  expect(returnedValue).toEqual(false);
 });

});

describe('checkLocationIsSafe', ()=>{

  it('returns a function', ()=> {
    expect(typeof checkLocationIsSafe).toEqual('function');
  });

  it('returns true because it is safe', ()=>{
    colPuz=
    [[0,5,4,0,0,0,0,0,0], 
    [1,7,9,0,0,0,0,0,0], 
    [6,8,2,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0,0],  
    [0,0,0,0,0,0,0,0,0]]; 
    let returnedValue = checkLocationIsSafe(colPuz,0,0,3);
    expect(returnedValue).toEqual(true);
  });

  it('returns false because number exists in ranges', ()=>{
  unsolvedPz=
      [ [3,0,6,5,0,8,4,0,0], 
        [5,2,0,0,0,0,0,0,0], 
        [0,8,7,0,0,0,0,3,1], 
        [0,0,3,0,1,0,0,8,0], 
        [9,0,0,8,6,3,0,0,5], 
        [0,5,0,0,9,0,6,0,0], 
        [1,3,0,0,0,0,2,5,0], 
        [0,0,0,0,0,0,0,7,4], 
        [0,0,5,2,0,6,3,0,0]] ;
  let returnedValue = checkLocationIsSafe(unsolvedPz,8,8,1);
  expect(returnedValue).toEqual(false);
 });

});

describe('solveSudoku', ()=>{

  it('returns a function', ()=> {
    expect(typeof solveSudoku).toEqual('function');
  })

  it('returns true if it solved puzzle', ()=>{

  unsolvedPz=
       [[3,0,6,5,0,8,4,0,0], 
        [5,2,0,0,0,0,0,0,0], 
        [0,8,7,0,0,0,0,3,1], 
        [0,0,3,0,1,0,0,8,0], 
        [9,0,0,8,6,3,0,0,5], 
        [0,5,0,0,9,0,6,0,0], 
        [1,3,0,0,0,0,2,5,0], 
        [0,0,0,0,0,0,0,7,4], 
        [0,0,5,2,0,6,3,0,0]] ;
    solvedPz=
        [[3,1,6,5,7,8,4,9,2], 
        [5,2,9,1,3,4,7,6,8], 
        [4,8,7,6,2,9,5,3,1], 
        [2,6,3,4,1,5,9,8,7], 
        [9,7,4,8,6,3,1,2,5], 
        [8,5,1,7,9,2,6,4,3], 
        [1,3,8,9,4,7,2,5,6], 
        [6,9,2,3,5,1,8,7,4], 
        [7,4,5,2,8,6,3,1,9]]; 
    let returnedValue = solveSudoku(unsolvedPz);
    expect(returnedValue).toEqual(true);
  });

});

describe('makeItHappen', ()=>{

  it('returns a function', ()=> {
    expect(typeof makeItHappen).toEqual('function');
  })

  it('returns true if it solved puzzle', ()=>{

  unsolvedPz=
       [[3,0,6,5,0,8,4,0,0], 
        [5,2,0,0,0,0,0,0,0], 
        [0,8,7,0,0,0,0,3,1], 
        [0,0,3,0,1,0,0,8,0], 
        [9,0,0,8,6,3,0,0,5], 
        [0,5,0,0,9,0,6,0,0], 
        [1,3,0,0,0,0,2,5,0], 
        [0,0,0,0,0,0,0,7,4], 
        [0,0,5,2,0,6,3,0,0]] ;
    solvedPz=
        [[3,1,6,5,7,8,4,9,2], 
        [5,2,9,1,3,4,7,6,8], 
        [4,8,7,6,2,9,5,3,1], 
        [2,6,3,4,1,5,9,8,7], 
        [9,7,4,8,6,3,1,2,5], 
        [8,5,1,7,9,2,6,4,3], 
        [1,3,8,9,4,7,2,5,6], 
        [6,9,2,3,5,1,8,7,4], 
        [7,4,5,2,8,6,3,1,9]]; 
    let returnedValue = makeItHappen(unsolvedPz);
    expect(returnedValue).toEqual(solvedPz);
  });

  it('returns true if it solved puzzle', ()=>{

    unsolvedPz=
          [[1,0,2,4,8,9,3,7,6], 
          [7,0,9,2,0,6,8,4,1], 
          [4,6,8,3,7,1,2,9,5], 
          [3,8,7,1,2,4,6,5,9], 
          [5,9,1,7,0,0,4,2,8], 
          [2,4,6,8,0,0,7,1,3], 
          [9,1,4,6,3,7,5,0,2], 
          [6,0,5,9,4,8,1,3,7], 
          [8,7,3,5,1,2,9,6,0]]; 
      solvedPz=
          [[1,5,2,4,8,9,3,7,6], 
          [7,3,9,2,5,6,8,4,1], 
          [4,6,8,3,7,1,2,9,5], 
          [3,8,7,1,2,4,6,5,9], 
          [5,9,1,7,6,3,4,2,8], 
          [2,4,6,8,9,5,7,1,3], 
          [9,1,4,6,3,7,5,8,2], 
          [6,2,5,9,4,8,1,3,7], 
          [8,7,3,5,1,2,9,6,4]]; 
      let returnedValue = makeItHappen(unsolvedPz);
      expect(returnedValue).toEqual(solvedPz);
    });

});
