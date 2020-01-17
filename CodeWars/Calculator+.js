const Calculator = function() {
  this.evaluate = function(string) {
    let charArr = string.split('');

    // grouping
    let deep = 0;
    let endI;
    let number;

    for (let i = charArr.length - 1; i >= 0; i--) {
      if (charArr[i] === ')') {
        deep++;
        if (deep === 1) endI = i;
      }
      if (charArr[i] === '(') {
        deep--;
        if (deep === 0) {
          number = this.evaluate( charArr.slice(i + 1, endI).join('') );
          charArr.splice(i, endI - i + 1, number).join('');
        }
      }
    }

    // Multiplication, Division
    let result;
    const pieceArr = charArr.join('').split(' ');

    for (let i = 1; i < pieceArr.length;) {
      const sign = pieceArr[i];
      if (sign === '*' || sign === '/') {
        result = sign === '*' ? (+pieceArr[i - 1] * +pieceArr[i + 1]) : (+pieceArr[i - 1] / +pieceArr[i + 1])
        pieceArr.splice(i - 1, 3, result);
      } else {
        i += 2;
      }
    }
    // Addition, Subtraction

    for (let i = 1; i < pieceArr.length;) {
      const sign = pieceArr[i];
      if (sign === '+' || sign === '-') {
        result = sign === '+' ? (+pieceArr[i - 1] + +pieceArr[i + 1]) : (+pieceArr[i - 1] - +pieceArr[i + 1])
        pieceArr.splice(i - 1, 3, result);
      } else {
        i += 2;
      }
    }

    return pieceArr[0];
  }
};