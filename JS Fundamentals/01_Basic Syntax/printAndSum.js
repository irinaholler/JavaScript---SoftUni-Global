function printAndSum(num1, num2) {
    let sum = 0;
    let newArr = [];
    for (let index = num1; index <= num2; index++) {
        let elements = index;
        newArr.push(elements);
        sum += elements;
    }
    console.log(newArr.join(" "));
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)