// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

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