function lastNumbersSequance(n, k) {
    let newSequance = 1;
    let firstElement = [];

    for (let i = 1; i <= n; i++) {
        let firstElement = i;
        for (let j = 1; j < k; j++) {
            let secondElement = j;
            let sum = firstElement + secondElement;
            firstElement.push(sum)
        }
    }
    console.log(firstElement);
}

lastNumbersSequance(6, 3)