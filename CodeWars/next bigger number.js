// Next bigger number with the same digits
// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n){
  const numArr = String(n).split('');

  for (let i = numArr.length - 1; i >= 0; i--) {
    const tempNumArr = [...numArr];
    [tempNumArr[i] , tempNumArr[i + 1]] = [tempNumArr[i + 1] , tempNumArr[i]];
    const number = String(tempNumArr.join(''));
    if (number > n) return +number;
  }
  return -1;
}

console.log(nextBigger(5313));