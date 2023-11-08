function rightPlace(string, char, result) {
    for (let i = 0; i < string.length; i++) {
        let symbol = '_';

        if(string[i].includes(symbol)) {
            let newElement = string.replace(symbol, char);
                if(newElement === result) {
                    console.log("Matched");
                } else {
                    console.log("Not Matched");
                }
        }
    }
}

rightPlace('Str_ng', 'i', 'String')

