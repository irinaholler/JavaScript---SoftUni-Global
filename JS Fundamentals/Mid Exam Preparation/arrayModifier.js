function arrayModifier(params) {
    let elements = params.shift().split(" ").map(Number);

        for (let iterator of params) {
            let newCommands = iterator.split(" ");
            let addCommand = newCommands[0];
            let index1 = Number(newCommands[1]);
            let index2 = Number(newCommands[2]);

            if(addCommand === 'swap') {
                let temp = elements[index1];
                elements[index1] = elements[index2];
                elements[index2] = temp;
            } else if(addCommand === 'multiply') {
                elements[index1] *= elements[index2];          
            } else if(addCommand === 'decrease') {
                for (let index = 0; index < elements.length; index++) {
                    elements[index]--;            
                }
            }  else if(addCommand === 'end') {
                break;
            }
        }
    console.log(elements.join(", "));
}

arrayModifier( ['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])