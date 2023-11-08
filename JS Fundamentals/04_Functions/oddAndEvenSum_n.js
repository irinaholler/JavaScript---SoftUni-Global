function oddAndEvenSum(num) {
    let numberToString = String(num);
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numberToString.length; i++) {
        let stringToNumber = Number(numberToString[i]);

        if (stringToNumber % 2 == 0) {
            even += stringToNumber;
        } else {
            odd += stringToNumber;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435)