function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let counterHelmet = 0;
    let counterSword = 0;
    let counterShield = 0;
    let counterArmor = 0;
    for (let game = 1; game <= lostFightsCount; game++) {
        if (game % 2 === 0) {
            counterHelmet++;  
        }
        if (game % 3 === 0) {
            counterSword++
        }
        if (game % 6 == 0) {
            counterShield++;
        } 
        if (game % 12 == 0) {
            counterArmor++;
        }
    }
    helmetPrice = helmetPrice * counterHelmet;
    swordPrice = swordPrice * counterSword;
    shieldPrice = shieldPrice * counterShield;
    armorPrice = armorPrice * counterArmor;
    let expenses = helmetPrice + swordPrice + shieldPrice + armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )