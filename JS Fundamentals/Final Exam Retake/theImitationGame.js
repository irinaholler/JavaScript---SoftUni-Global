function theImitationGame(params) {
    let word = params.shift();

    while (params[0] !== "Decode") {
        let line = params.shift();
        let newWord = line.split('|');

        if(newWord[0] == "Insert") {
            word = word.splice(1, 0, newWord[2]);
            console.log(newWord);
        } 

        if(newWord[0] == "ChangeAll") {
            word = word.replaceAll(newWord[1], newWord[2]);
            console.log(word);
        } 
    }   
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])
