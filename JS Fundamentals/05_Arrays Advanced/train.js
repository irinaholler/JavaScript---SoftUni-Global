function train(params) {
    let wagons = params.shift().split(` `).map(Number);
    let maxCapacity = Number(params.shift());

    for (let elements of params) {
        let newParams = elements.split(` `);

        if(newParams[0] == "Add") {
            wagons.push(Number(newParams[1]));
        } else {

            for (let index = 0; index < wagons.length; index++) {
                let newNum = Number(newParams[0]);
                let sum = wagons[index] + newNum;
                
                if (sum <= maxCapacity) {
                    wagons[index] += newNum;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])