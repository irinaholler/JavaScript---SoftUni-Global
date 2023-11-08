function coffee(input) {
    let drinksName = input[0];
    let sugar = input[1];
    let drinks = Number(input[2]);
    let price = 0;
    let discount = 0;
    let perDisc = 0;
    let cupDisc = 0;

    switch (drinksName) {
        case "Espresso":
            if (sugar === "Without") {
                price = drinks * 0.90;
                discount = price * 0.65;
            } else if (sugar === "Normal") {
                price = drinks * 1.00;
            } else if (sugar === "Extra") {
                price = drinks * 1.20;
            }
        break;
        case "Cappuccino":
            if (sugar === "Without") {
                price = drinks * 1.00;
                discount = price * 0.65;
            } else if (sugar === "Normal") {
                price = drinks * 1.20;
            } else if (sugar === "Extra") {
                price = drinks * 1.60;
            }
        break;
        case "Tea":
            if (sugar === "Without") {
                price = drinks * 0.50;
                discount = price * 0.65;
            } else if (sugar === "Normal") {
                price = drinks * 0.60;
            } else if (sugar === "Extra") {
                price = drinks * 0.70;
            }
        break;
    }
    if (drinksName === "Espresso" && drinks >= 5) {
        cupDisc = discount * 0.25;
        let sumEsp = discount - cupDisc;
        console.log(`You bought ${drinks} cups of ${drinksName} for ${sumEsp.toFixed(2)} lv.`);
    }
    if (price > 15) {
        discount = price * 0.20;
    }
    let sum = price - discount;
    console.log(`You bought ${drinks} cups of ${drinksName} for ${sum.toFixed(2)} lv.`);
}

coffee(["Cappuccino",
"Normal",
"13"])



