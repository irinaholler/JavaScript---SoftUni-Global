function procesOddNumbers(array) {

    let oddIndex = array.filter((array, index) => index % 2 == 1);
    let multiply = oddIndex.map(x => x * 2);
    let reversed = multiply.reverse();
    console.log(reversed);

    

}

procesOddNumbers([10, 15, 20, 25])