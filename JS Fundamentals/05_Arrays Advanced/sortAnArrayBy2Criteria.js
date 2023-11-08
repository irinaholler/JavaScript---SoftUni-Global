function sortAnArrayBy2Criteria(string) {
    let newString = string.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(newString.join(`\n`));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
console.log("---------");
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])