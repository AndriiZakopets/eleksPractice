// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    let count = 0;
    const checked = {};

    for (const char of text) {
        const lowerChar = char.toLowerCase();

        if (!checked[lowerChar]) {
            checked[lowerChar] = 1;
        } else if(checked[lowerChar] === 1) {
            count++;
            checked[lowerChar]++;
        }
    }

    return count;
}
