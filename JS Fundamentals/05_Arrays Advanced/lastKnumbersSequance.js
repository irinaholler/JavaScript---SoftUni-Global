function lastKnumbersSequance(n, k) {
    let result = [1];
    for (let i = 0; i < n - 1; i++) {
        let sequence = result.slice(-k);

        let sum = 0;
        for (el of sequence) {
            sum += el;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}

lastKnumbersSequance(6, 3)