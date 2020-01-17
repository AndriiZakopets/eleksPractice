// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(inputStr) {
    const inputArr = inputStr.toLowerCase().split('');

    let resultArr = [];
    for (const charI in inputArr) {
        let arrayToAdd = [];

        for (let i = 0; i <= charI; i++) {
            const char = (i === 0) ? inputArr[charI].toUpperCase() : inputArr[charI];
            arrayToAdd.push(char);
        }

        resultArr.push(arrayToAdd.join(''));
    }

    return resultArr.join('-');
}

console.log(accum('abcd'))