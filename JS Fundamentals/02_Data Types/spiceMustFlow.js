function spiceMustFlow(startingYield) {
    let dayCounter = 0;
    let consumes = 0;
    for (let i = 0; i < startingYield; i++) {
        if (startingYield < 100) {
            break;
        }
        if (startingYield >= 100) {
            dayCounter++;
            consumes += startingYield - 26;
            startingYield -= 10;
        }
    }
    console.log(dayCounter);
    if (dayCounter !== 0) {
        console.log(consumes - 26);
    } else {
        console.log(consumes);
    }
}

spiceMustFlow(450)