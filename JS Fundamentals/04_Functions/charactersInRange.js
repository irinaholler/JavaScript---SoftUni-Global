function charactersInRange(param1, param2) {
    let firstParam = param1.charCodeAt(0);
    let secondParam = param2.charCodeAt(0);
    let startParam = Math.min(firstParam, secondParam);
    let endParam = Math.max(firstParam, secondParam);
    let newRange = "";

    for (let i = startParam + 1; i < endParam; i++) {
        let elements = i;
        let charCode = String.fromCharCode(elements);
        newRange += `${charCode} `
    }
    console.log(newRange);
}

charactersInRange('a',
'd')
console.log("____");
charactersInRange('#', ':')