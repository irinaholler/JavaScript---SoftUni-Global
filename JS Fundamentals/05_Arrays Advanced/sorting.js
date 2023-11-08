function sorting(numbers) {
    numbers = numbers.sort((a, b) => b - a);
    let newArr = [];

    while (numbers.length > 0) {
        let bigNum = numbers.shift();
        console.log(bigNum);
    }
    
    console.log();
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])