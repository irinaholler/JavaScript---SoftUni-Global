function repeatString(string, num) {
    let newString = [];
    for (let i = 0; i < num; i++) {
        newString += string
    }
    return newString;
}

console.log(repeatString("abc", 3));