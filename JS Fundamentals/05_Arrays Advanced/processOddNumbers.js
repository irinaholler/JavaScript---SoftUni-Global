function processOddNumbers(mixNumbers) {
    let oddNumbers = mixNumbers.filter((odd, i) => i % 2 == 1);
    let doubledNumbers = oddNumbers.map(odd  => odd * 2);
    let reversedNumbers = doubledNumbers.reverse();

    console.log(reversedNumbers.join(" "));
}

processOddNumbers([10, 15, 20, 25])

