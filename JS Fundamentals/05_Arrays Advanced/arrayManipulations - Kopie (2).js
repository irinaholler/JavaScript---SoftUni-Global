function arrayManipulator(arr, commands) {
    let sumAllPairs = 0;

    for (let index = 0; index < commands.length; index++) {
        let el = commands[index];
        let splitEl = el.split(` `);
        let firstValue = splitEl.shift();
        splitEl = splitEl.map(Number);
        
        if (firstValue === 'add') {
            arr.splice(splitEl[0], 0, splitEl[1]);
        } else if (firstValue === 'addMany') {
            let indexToAdd = Number(splitEl.shift());
            arr.splice(indexToAdd, 0, ...splitEl);
        } else if (firstValue === 'contains') {
            console.log(arr.indexOf(splitEl[0]));
        } else if (firstValue === 'remove') {
            let delNum = arr.splice(splitEl[0], 1);
        } else if (firstValue === 'shift') {
            for (let j = 0; j < splitEl[0]; j++) {
                arr.push(arr.shift());
            }
        } else if (firstValue === 'sumPairs') {
            let newArr = [];
            if (arr.length % 2 !== 0) {
                arr.push(0);
            }
            for (let s = 0; s < arr.length - 1; s+=2) {
                sumAllPairs = Number(arr[s]) + Number(arr[s + 1]);
                newArr.push(sumAllPairs);
            }
            arr = newArr;
        }  else if (firstValue === 'print') {
            console.log(`[ ${arr.join(", ")} ]`);
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
