function partyTime(params) {
    let vip = [];
    let regular = [];

    let currName = params.shift();
    
    while (currName !== 'PARTY') {
        let char = currName[0];
        if(!isNaN(char)) {
            vip.push(currName);
        } else {
            regular.push(currName)
        }
        currName = params.shift();
    }
    let allNames = vip.concat(regular);
    
    for (let name of params) {
        allNames.splice(allNames.indexOf(name), 1);
    }
    console.log(allNames.length);
    console.log(allNames.join("\n"));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'])