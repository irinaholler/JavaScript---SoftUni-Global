function piccolo(params) {
    let parking = {};

    for (let line of params) {
        let [command, carNumber] = line.split(", ");

        if(command === 'IN') {
            parking[carNumber] = 1;
        } else {
            delete parking[carNumber];
        }
    }
    let sorted = Object.keys(parking)
    .sort((a,b) => a.localeCompare(b))
    .join("\n");

    if (sorted.length === 0) {
        console.log("Parking Lot is Empty");
    }
    console.log(sorted);
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
console.log("--------");
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)