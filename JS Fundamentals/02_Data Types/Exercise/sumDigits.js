function sumDigits(num) {
    let sum = 0;
    let numToString = String(num);

    for (let char of numToString) {
        sum += Number(char);
    }
    console.log(sum);
}

sumDigits(245678)