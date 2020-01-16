function duplicateCount(text){
    let count = 0;
    const checked = new Set();

    for (const char of text) {
        const lowerChar = char.toLowerCase();
        if (!checked.entries(lowerChar)) {
            checked.add(lowerChar);
        } else {
            count++;
        }
    }

    return count;
}