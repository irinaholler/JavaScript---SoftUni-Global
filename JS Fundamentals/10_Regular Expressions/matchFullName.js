function matchFullName(text) {
    let newText= "";
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = pattern.exec(text);

    while (match !== null) {
        newText += `${match[0]} `;
        match = pattern.exec(text);
    }
    console.log(newText);
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")



