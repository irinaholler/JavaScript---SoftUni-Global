function houseParty(params) {
    let list = [];

    for (const iterator of params) {
        let command = iterator.split(" ");
        let name = command.shift();
        let isIncluded = list.includes(name);

        if (command[1] == "not") {
            if (isIncluded) {
                let curName = list.includes(name);
                list.splice(curName, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (!isIncluded) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(list.join("\n"));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)