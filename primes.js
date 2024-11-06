function findPrimes(min, max) {
    const primes = [];

    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;  // Если делится без остатка, не простое
    }
    return true;  // Простое число
}

console.log(findPrimes(11, 20)); // [11, 13, 17, 19]
