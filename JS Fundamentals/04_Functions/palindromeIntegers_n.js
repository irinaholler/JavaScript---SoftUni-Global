function palindromeIntegers(num){
    for (let el of num) {
        let currentNumber = String(el);
        let numberPalindrome = currentNumber.split("").reverse().join("");

        if (currentNumber === numberPalindrome) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
palindromeIntegers([123,323,421,121]);
