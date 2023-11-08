function modernTimesOf(sentence) {
    let words = sentence.split(` `);

    for (let word of words) {
        if(word.startsWith(`#`) && word.length > 1) {
            let asciiCode = word.charCodeAt(1);
            let isLetter =
                (asciiCode >= 65 && asciiCode <= 90) ||
                (asciiCode >= 97 && asciiCode <= 122);
            if(isLetter) {
                let newWord = word.substring(1);
                console.log(newWord);
            }
        }
    }
}

modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimesOf('The symbol # is known #variously in English-speaking #regions as the #number sign')