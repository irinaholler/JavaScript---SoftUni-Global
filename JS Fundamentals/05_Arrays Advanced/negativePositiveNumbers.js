function negativePositiveNumbers(array) {
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        let element = Number(array[index]);

        if(element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element)
        }
    }
    console.log(newArr.join("\n"));
}

negativePositiveNumbers(['7', '-2', '8', '9'])