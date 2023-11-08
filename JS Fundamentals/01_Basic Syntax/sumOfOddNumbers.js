function sumOfOddNumbers(num) {
    let sum = 0;
    let printLine = 0;

    for (let i = 1; i <= 100; i += 2) {
        if (printLine === num) {
            break;
        }

        sum += i;
        console.log(i);
        printLine++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)