function countStringOccurrences(sentence, word) {
    let words = sentence.split(` `);
    let sum = 0;
    for (let iterator of words) {
       if (iterator === word) {
        sum++;;
       }
    }
    console.log(sum);
}

countStringOccurrences('This is a word and it also is a sentence',
'is')