function triangleOfNumbers(number) {
    for (var i = 1; i <= number; i++) {
        let printed = ``;
        for (var j = 1; j <= i; j++) {
            printed += i + " ";
        }
        console.log(printed);
    }
}

triangleOfNumbers(3)