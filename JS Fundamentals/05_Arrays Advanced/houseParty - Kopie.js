function houseParty(params) {
    let list = [];
    let going = [];
    let notGoing = [];
    
    for (let elements of params) {
        let newParams = elements.split(` `);
        let name = newParams[0];
        let isIncluded = list.includes(name);

        if (newParams[2] !== 'not') {
            if(isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            if(!isIncluded) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = list.indexOf(name);
                list.splice(index, 1)
            }
        }
    }
    console.log(list.join(`\n`));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])