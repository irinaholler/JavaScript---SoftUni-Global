function arrayManipulator(array, stringCommands) {
    for (let el of stringCommands) {
        let commands = el.split(" ");
        let command = commands[0];

        if (command === 'add') {
            let index = Number(commands[1]);
            let element = Number(commands[2]);
            array.splice(index, 0, element);
        } else if (command === 'addMany') {
            let index = Number(commands[1]);
            commands.splice(0, 2);
            let numToAdd = commands.map(Number);
            array.splice(index, 0, ...numToAdd);
        } else if (command === 'contains') {
            let element = Number(commands[1]);
            let indexOfElement = array.indexOf(element);
            console.log(indexOfElement);
        } else if (command === 'remove') {
            let element = Number(commands[1]);
            array.splice(element, 1);
        } else if (command === 'shift') {
            let element = Number(commands[1]);
            for (let i = 0; i < element; i++) {
                array.push(array.shift());
            }
        } else if (command === 'sumPairs') {
            let newArr = [];
            if(array.length % 2 !== 0) {
                newArr.push(0);
            }
            for (let i = 0; i < array.length; i+=2) {
                let sum = Number(array[i]) + Number(array[i + 1]);
                newArr.push(sum);
            }
            array = newArr;
        } else if (command === 'print') {
            console.log(`[ ${array.join(", ")} ]`);
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
