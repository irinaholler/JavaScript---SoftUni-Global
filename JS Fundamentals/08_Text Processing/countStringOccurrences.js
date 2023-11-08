function countStringOccurrences(sentence, word) {
    let words = sentence.split(` `);
    let count = words.filter(x => x == word);
    console.log(count.length);
}

countStringOccurrences('This is a word and it also is a sentence',
'is')