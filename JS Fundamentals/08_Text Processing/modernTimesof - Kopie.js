function modernTimesOf(sentence) {
    let words = sentence.split(` `);
    let newWord = [];

    for (let word of words) {
        if(word[0] === `#` && word.length > 1) {
            let newWords = word.replace(`#`, ``).trim();
            newWord.push(newWords);
        }
    }
    console.log(newWord.join(`\n`));
}

modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimesOf('The symbol # is known #variously in English-speaking #regions as the #number sign')