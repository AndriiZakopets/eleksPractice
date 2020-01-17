// Sudoku Solution Validator
// https://www.codewars.com/kata/529bf0e9bdf7657179000008

function validSolution(board){
  const map = new Array(9);

  for (let i = 0; i < 9; i++) {
    map.fill(0);
    const squareInitI =  Math.floor(i / 3) * 3;;
    const squareInitJ = (i % 3) * 3;;
    for (let j = 0; j < 9; j++) {
      // row
      if ( ++map[ board[i][j] - 1 ] > 3) return false;

      // columm
      if ( ++map[ board[j][i] - 1 ] > 3) return false;

      // square
      const squareAdditionalI = Math.floor(j / 3);
      const squareAdditionalJ = j % 3;
      if ( ++map[ board[squareInitI + squareAdditionalI][squareInitJ + squareAdditionalJ] - 1 ] > 3) return false;
    }
  }
  return true;
}