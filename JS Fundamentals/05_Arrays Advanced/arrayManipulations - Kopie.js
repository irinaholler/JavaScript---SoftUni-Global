function arrayManipulations(params) {
    let newArr = params.shift().split(` `).map(Number);
    let manipulated = [];

    for (let elements of params) {
        let newParams = elements.split(` `);

        if(newParams[0] === "Add") {
            newArr.push(Number(newParams[1]));
        } else if(newParams[0] === "Remove") {
            newArr = newArr.filter(num => num !== Number(newParams[1]));
        } else if(newParams[0] === "RemoveAt") {
            newArr.splice(Number(newParams[1]), 1);
        } else if(newParams[0] === "Insert") {
            newArr.splice(Number(newParams[2]), 0, Number(newParams[1]));
        }
    }
    console.log(newArr.join(` `));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)