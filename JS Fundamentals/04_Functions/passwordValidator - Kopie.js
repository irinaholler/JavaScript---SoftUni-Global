function passwordValidator(input) {
    function isLengthEnough(password) {
            let currentCharacter = password.length;
    
            if(currentCharacter >= 6 && currentCharacter <= 10) {
                return true;
            } else {
                return false;
            }
    }
    console.log(isLengthEnough('logInck'));

    function isOnlyLettersDigits(password) {
        for (let charPassword of password) {
            let currentChar = charPassword.charCodeAt(0);
            if(
                !(currentChar >= 48 && currentChar <= 57) && 
                !(currentChar >= 65 && currentChar <= 90) && 
                !(currentChar >= 97 && currentChar <= 122)
            ) {
                return false;
            } else {
                return true;
            }
        }
    }
    console.log(isOnlyLettersDigits('logInck'));

    function isHaveTwoDigits(password) {
        let counter = 0;
        for (let numPassword of password) {
            let currentNumber = numPassword.charCodeAt(0);

            if(currentNumber >= 48 && currentNumber <= 57) {
                counter++;
            }
        }
        return counter >= 2 ? true: false;
    }
    console.log(isHaveTwoDigits('logInck22'));
}

passwordValidator('logInc')