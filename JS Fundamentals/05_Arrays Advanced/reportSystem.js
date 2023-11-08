function reportSystem(input) {
    let index = 0;
    let amountNeeded = Number(input[index]);
    index++;
    let command = input[index];

    let cash = 0;
    let withCard = 0;
    let counter = 0;
    let cashCounter = 0;
    let cardCounter = 0;
 
    while (command !== "End") {
        let price = Number(command);
        counter++;

        if(counter % 2 !== 0) {
            if(price >= 100) {
                console.log("Error in transaction!");
                console.log(`Average CS: ${price}`);
                break;
            } else {
                cashCounter += price;
                cash += cashCounter;
                console.log("Product sold!");
            }
        } else if(counter % 2 === 0) {
            if(price >= 10) {
                withCard += price;
                cash += withCard;
                console.log("Product sold!");
            } else {
                
            }
        }

        index++;
        command = input[index];
    }
    console.log(cashCounter);
    console.log(withCard);
}
reportSystem([600,
    86,
    150,
    98,
    227,
    "End"])
