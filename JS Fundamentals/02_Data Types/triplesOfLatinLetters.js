function triplesOfLatinLetters(number) {
    let result = "";
    for (i = 0; i < Number(number); i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (j = 0; j < Number(number); j++) {
            let letter2 = String.fromCharCode(97 + j);
            for (k = 0; k < Number(number); k++) {
                let letter3 = String.fromCharCode(97 + k);
                result = letter1 + letter2 + letter3
                console.log(result);
            }
        }
    }
}

triplesOfLatinLetters('3')