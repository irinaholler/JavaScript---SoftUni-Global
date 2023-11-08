function phoneBook(params) {
    let storedInfo = {};

    for (let lines of params) {
        let tokens = lines.split(" ");
        let name = tokens.shift();
        let telNumber = tokens;

        storedInfo[name] = telNumber;
    }
    for (let key in storedInfo) {
        console.log(`${key} -> ${storedInfo[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])