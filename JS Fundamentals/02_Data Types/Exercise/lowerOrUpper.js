function lowerOrUpper(character) {
    if (character >= String.fromCharCode(65) && character <= String.fromCharCode(90)) {
        console.log('upper-case');
    } else if (character >= String.fromCharCode(97) && character <= String.fromCharCode(122)) {
        console.log('lower-case');
    }
}

lowerOrUpper('L')