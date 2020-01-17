// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

const formatDuration = function(time) {
  if (time === 0) return 'now';

  let timeLeft = time;
  const timeArr = [];
  const timeMap = {
    0: 'year',
    1: 'day',
    2: 'hour',
    3: 'minute',
    4: 'second'
  };
  // format: [seconds, minutes, hours, days, years]

  timeArr.push(timeLeft % 60);
  timeLeft = Math.floor(timeLeft / 60);
  timeArr.push(timeLeft % 60);
  timeLeft = Math.floor(timeLeft / 60);
  timeArr.push(timeLeft % 24);
  timeLeft = Math.floor(timeLeft / 24);
  timeArr.push(timeLeft % 365);
  timeLeft = Math.floor(timeLeft / 365);
  timeArr.push(timeLeft);

  const strArr = timeArr.reverse().map((time, i) => {
    if (time === 0) return;
    
    return `${time} ${timeMap[i]}${time > 1 ? 's' : ''}`;
  });

  let isFirst = true;

  return strArr.reduceRight((acc, curr) => {
    if (curr && acc !== '') {
      const str = `${curr}${isFirst ? ' and ' : ', '}${acc}`;
      isFirst = false;
      return str;
    }
    if (curr) return `${curr}${acc}`;
    return acc;
  }, '');;
}

console.log(formatDuration(1234567890));