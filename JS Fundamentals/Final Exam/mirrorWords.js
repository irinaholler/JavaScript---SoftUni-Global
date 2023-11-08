function mirrorWords(params) {
    let text = params[0];
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;

    let validMatch = pattern.exec(text);
    let counter = 0;
    let result = [];

    while(validMatch !== null) {
        counter++;
        let wordOne = validMatch[2];
        let wordTwo = validMatch[3];
        let reversed = wordTwo.split('').reverse().join('');

        if(!wordOne.localeCompare(reversed)) {
            result.push(`${wordOne} <=> ${wordTwo}`);
        }
        validMatch = pattern.exec(text);
    }
    
    if(counter == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (result.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(", "));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
console.log(" --------------");
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])