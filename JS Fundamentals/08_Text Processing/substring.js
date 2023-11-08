function substring(string, start, long) {
    let newSubString = string.substring(start, long + start);
    console.log(newSubString);
}

substring('ASentence', 1, 8)
console.log("---");
substring('SkipWord', 4, 7)