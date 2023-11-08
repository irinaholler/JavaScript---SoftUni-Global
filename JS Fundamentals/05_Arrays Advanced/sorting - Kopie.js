function sorting(numbers) {
    numbers = numbers.sort((a, b) => b - a);
    let newList= [];

    while(numbers.length > 0) {
        let bigNum = numbers.shift();
        newList.push(bigNum);
        let smallNum = numbers.pop();
        newList.push(smallNum)
    }
    console.log(newList.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])