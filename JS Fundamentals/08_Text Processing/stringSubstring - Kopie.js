function stringSubstring(word, sentence) {
    let words = sentence.split(` `);
    
    for (let element of words) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            console.log(word);
            return;
        } 
    } 
    console.log(`${word} not found!`);
}

stringSubstring('python',
'JavaScript is the best programming language'
)