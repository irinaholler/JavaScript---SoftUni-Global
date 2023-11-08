function matchFullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = text.match(pattern);
    let matches = [];

    for (let iterator of match) {
        matches.push(iterator);
    }
    console.log(matches.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")

