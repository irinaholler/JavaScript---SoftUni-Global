function multiplicationTable(number) {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = i * number;
        console.log(`${number} X ${i} = ${sum}`);
    }
}

multiplicationTable(5)