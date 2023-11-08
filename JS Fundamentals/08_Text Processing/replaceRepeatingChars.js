function replaceRepeatingChars(letters) {
    let newWord = "";

    for (let index = 0; index < letters.length; index++) {
        let firstElement = letters.charAt(index);
        let nextElement = letters.charAt(index + 1);

        if (firstElement != nextElement) {
            newWord += firstElement;
        }   
    }
    console.log(newWord);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')