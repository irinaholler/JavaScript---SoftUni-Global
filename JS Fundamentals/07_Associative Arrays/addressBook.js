function addressBook(params) {
    let storedInfo = {};

    for (let lines of params) {
        let [name, address] = lines.split(":");
        storedInfo[name] = address;
    }

    let sorted = Object.entries(storedInfo);
    sorted.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    });      

    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])