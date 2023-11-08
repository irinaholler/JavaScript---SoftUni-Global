function specialNumbers(n) {
    for (var num = 1; num <= n; num++) {
        let newNumber = 0;
        let numAsString = String(num);

        for (let i = 0; i < numAsString.length; i++) {
            newNumber += Number(numAsString[i]);
        }
        let special = false;
        if (newNumber === 5 || newNumber === 7 || newNumber === 11) {
            special = true;
        }
        if (special) {
            console.log(`${numAsString} -> True`);
        } else {
            console.log(`${numAsString} -> False`);
        }
    }
}

specialNumbers(20)