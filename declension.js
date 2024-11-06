function getDeclension(n) {
    let suffix;
    if (n % 100 >= 11 && n % 100 <= 19) {
        suffix = "компьютеров";
    } else {
        const digit = n % 10;
        if (digit === 1) {
            suffix = "компьютер";
        } else if (digit >= 2 && digit <= 4) {
            suffix = "компьютера";
        } else {
            suffix = "компьютеров";
        }
    }
    return `${n} ${suffix}`;
}


console.log(getDeclension(25));   // "25 компьютеров"
console.log(getDeclension(41));   // "41 компьютер"
console.log(getDeclension(1048)); // "1048 компьютеров"
