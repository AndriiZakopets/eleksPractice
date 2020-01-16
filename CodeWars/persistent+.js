function getDivisorsCnt(n){
    let divisors = 1;

    for (let i = 1; i <= n / 2; i++) {
        const ni = n / i;
        if (ni === Math.floor(ni)) {
        divisors++;
        }
    }

    return divisors;
}