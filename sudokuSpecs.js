describe('getRow', () => {

  let puzzle = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]];


  it('is a function', () => {
    expect(typeof getRow).toEqual('function');
  });

  it('8 returns the right array [ 3,2,8,1,9,6,5,4,7 ]', () => {
    let returnedValue = getRow(puzzle,8);
    expect(returnedValue).toEqual([ 3,2,8,1,9,6,5,4,7 ]);
  });

  it('0 returns the right array [ 8,9,5,7,4,2,1,3,6]', () => {
    let returnedValue = getRow(puzzle,0);
    expect(returnedValue).toEqual([ 8,9,5,7,4,2,1,3,6]);
  });

});

describe('getColumn', () => {

  let puzzle = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]];


  it('is a function', () => {
    expect(typeof getColumn).toEqual('function');
  });

  it('8 returns the right array [8,2,4,9,5,6,1,7,3]', () => {
    let returnedValue = getColumn(puzzle,0);
    expect(returnedValue).toEqual([ 8,2,4,9,5,6,1,7,3 ]      );
  });

  it('0 returns the right array [6,5,2,8,4,1,3,9,7]', () => {
    let returnedValue = getColumn(puzzle,8);
    expect(returnedValue).toEqual([6,5,2,8,4,1,3,9,7]);
  });

  it('5 returns the right array [2,3,1,7,8,9,4,5,6]', () => {
    let returnedValue = getColumn(puzzle,5);
    expect(returnedValue).toEqual([2,3,1,7,8,9,4,5,6]);
  });

});

describe('getSection', () => {

  let puzzle = [
  [ 8,9,5,   7,4,2,   1,3,6 ],
  [ 2,7,1,   9,6,3,   4,8,5 ],
  [ 4,6,3,   5,8,1,   7,9,2 ],

  [ 9,3,4,   6,1,7,   2,5,8 ],
  [ 5,1,7,   2,3,8,   9,6,4 ],
  [ 6,8,2,   4,5,9,   3,7,1 ],

  [ 1,5,9,   8,7,4,   6,2,3 ],
  [ 7,4,6,   3,2,5,   8,1,9 ],
  [ 3,2,8,   1,9,6,   5,4,7 ]];


  it('is a function', () => {
    expect(typeof getSection).toEqual('function');
  });

  it('0,0 returns the right array [8,9,5,2,7,1,4,6,3]', () => {
    let returnedValue = getSection(puzzle,0,0);
    expect(returnedValue).toEqual([8,9,5,2,7,1,4,6,3]);
  });

  it('2,2 returns the right array [8,9,5,2,7,1,4,6,3]', () => {
    let returnedValue = getSection(puzzle,2,2);
    expect(returnedValue).toEqual([8,9,5,2,7,1,4,6,3]);
  });

  it('3,0 returns the right array [7,4,2,9,6,3,5,8,1]', () => {
    let returnedValue = getSection(puzzle,3,0);
    expect(returnedValue).toEqual([7,4,2,9,6,3,5,8,1]);
  });

});

describe('includes1to9', () => {

  it('is a function', () => {
    expect(typeof includes1to9).toEqual('function');
  });

  it('[1,2,3,4,5,6,7,8,9] returns true', () => {
    let returnedValue = includes1to9([1,2,3,4,5,6,7,8,9]);
    expect(returnedValue).toEqual(true);
  });

  it('[1,1,3,4,5,6,7,8] returns false', () => {
    let returnedValue = includes1to9([1,1,3,4,5,6,7,8]);
    expect(returnedValue).toEqual(false);
  });

});

describe('sudokuIsValid', () => {

  it('is a function', () => {
    expect(typeof sudokuIsValid).toEqual('function');
  });
  let puzzle1 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

  it('puzzle returns true', () => {
    let returnedValue = sudokuIsValid(puzzle1);
    expect(returnedValue).toEqual(true);
  });

  let puzzle2 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

  it('puzzle returns false', () => {
    let returnedValue = sudokuIsValid(puzzle2);
    expect(returnedValue).toEqual(false);
  });

});

describe('isSame', () => {

  it('is a function', () => {
    expect(typeof isSame).toEqual('function');
  });
  let puzzle1 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

  let puzzle2 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];
          
let puzzle3 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

  it('returns true if both puzzles are the same', () => {
    let returnedValue = isSame(puzzle1,puzzle2);
    expect(returnedValue).toEqual(true);
  });


  it('returns false if both puzzles are different', () => {
    let returnedValue = isSame(puzzle1,puzzle3);
    expect(returnedValue).toEqual(false);
  });

});

