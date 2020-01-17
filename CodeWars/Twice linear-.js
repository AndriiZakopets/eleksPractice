// Twice linear
// https://www.codewars.com/kata/5672682212c8ecf83e000050

const sequence = [1];

const dblLinear = function rec(n, start = 0, end = 1) {
  let complete = true;
  console.log(start, end);
  for (let i = start; i < end; i++) {
    const currElem = sequence[i];
    sequence.push(currElem * 2 + 1);
    sequence.push(currElem * 3 + 1);
    if (currElem < n) complete = false;
  }
    
  if (complete) {
    const arr = sequence.reduce((arr, curr) => {
      if (!arr.find(elem => curr === elem)) arr.push(curr);
      return arr;
    }, []);
    arr.sort((f, s) => f > s ? 1 : -1);
    return arr[n];
  }

  return rec(n, end, sequence.length + 2);
}

// Exit Code: time out