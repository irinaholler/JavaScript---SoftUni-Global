function palindromeIntegers(params) {

    for (let el of params) {
        let currentParams = String(el);
        let backwardParams = String(el).split(``).reverse().join(``);
        
        if (currentParams === backwardParams) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,2,323,421,121])