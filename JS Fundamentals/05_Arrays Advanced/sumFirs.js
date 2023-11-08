function allNumbs(input) {
    let digNum = input.length;
    let sum = 0;
    let currentSum = 0;

    for (let index = 0; index < digNum; index++) {
        sum += input[index];

        if (input[index] % 2 == 0) {
            input[index] += index;
        } else {
            input[index] -= index;;
        }
        currentSum += input[index];
    }
    console.log(input);
    console.log(sum);
    console.log(currentSum);
}

allNumbs([-5, 11, 3, 0, 2])