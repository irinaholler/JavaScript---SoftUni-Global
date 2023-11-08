function pascalCaseSplitter(letters) {
    let words = [];
    let currentWord = "";
    let smallLetters = letters.toLocaleLowerCase();

    for (let index = 0; index < letters.length; index++) {
        let elements = letters[index];
        
        if(elements !== smallLetters[index]) {
            if(currentWord.length > 0) {
                words.push(currentWord);
            }
            currentWord = elements;
        } else {
            currentWord += elements;
        }
    }
    if(currentWord.length > 0) {
        words.push(currentWord);
    }
    console.log(words.join(`, `));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')