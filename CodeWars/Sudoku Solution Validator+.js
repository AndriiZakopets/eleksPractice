// Sudoku Solution Validator
// https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validSolution(board){
  const validNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const map = new Array(9);

  for (let i = 0; i < 9; i++) {
    map.fill(0);
    const squareInitI =  Math.floor(i / 3) * 3;;
    const squareInitJ = (i % 3) * 3;;
    for (let j = 0; j < 9; j++) {
      // row
      const rowCurr = board[i][j] - 1;
      if ( ++map[ rowCurr ] > 3 || !validNumbers.has(rowCurr)) return false;

      // columm
      const columnCurr = board[j][i] - 1
      if ( ++map[ columnCurr ] > 3 || !validNumbers.has(columnCurr)) return false;

      // square
      const squareAdditionalI = Math.floor(j / 3);
      const squareAdditionalJ = j % 3;
      const squareCurr = board[squareInitI + squareAdditionalI][squareInitJ + squareAdditionalJ] - 1;
      if ( ++map[ squareCurr ] > 3 || !validNumbers.has(squareCurr)) return false;
    }
  }
  return true;
}