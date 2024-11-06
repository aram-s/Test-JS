function table(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j).toString().padEnd(4, " ");
        }
        console.log(row);
    }
}

table(5);
