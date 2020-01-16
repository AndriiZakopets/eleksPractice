function DNAStrand(dna){
    const dnaArray = dna.split('');
    const convert = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    const resultArray = dnaArray.map(char => convert[char]);

    return resultArray.join('');
}