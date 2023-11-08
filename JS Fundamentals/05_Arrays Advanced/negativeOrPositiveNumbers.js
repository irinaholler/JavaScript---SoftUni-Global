function negativeOrPositiveNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let newNum = Number(arr[i]);
        if(newNum < 0) {
            result.unshift(newNum);
        } else {
            result.push(newNum);
        }
    }   
    console.log(result.join(`\n`));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])