function commonDivisors(arr) {
    const min = Math.min(...arr);
    const divisors = [];

    for (let i = 2; i <= min; i++) {
        if (arr.every(num => num % i === 0)) { 
            divisors.push(i); 
        }
    }
    return divisors;
}

console.log(commonDivisors([42, 12, 18]));