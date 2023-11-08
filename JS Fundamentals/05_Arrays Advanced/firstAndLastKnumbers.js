function firstAndLastKnumbers(arr) {
    let value = arr.shift();
    let firstSlice = arr.slice(0, value);
    let lastSlice = arr.slice(-value);

    console.log(firstSlice.join(` `));
    console.log(lastSlice.join(` `));
}

firstAndLastKnumbers([2, 7, 8, 9])