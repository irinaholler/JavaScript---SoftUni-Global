function name(array) {
        let newArr = [];
        for (let i = 0; i < array.length - 1; i++) {
            newArr.push(array[i] + array[i + 1]);
        }
    console.log(newArr);
}
name([2,10,3]);