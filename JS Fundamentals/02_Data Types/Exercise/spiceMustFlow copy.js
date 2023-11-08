function spiceMustFlow(startingYield) {
    let drops = 10;
    let consumes = 26;
    let workersConsume = 0;
    let daysCounter = 0;

    while (startingYield >= 100) {
        workersConsume += startingYield - consumes;
        startingYield -= drops;
        daysCounter++;
    }
    console.log(daysCounter);
    if (daysCounter !== 0) {
        console.log(workersConsume - consumes);
    } else {
        console.log(workersConsume);
    }
}

spiceMustFlow(111)