function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
let totalPriceEquipment = 0;

    for (let game = 1; game <= lostFights; game++) {
        if(game % 2 == 0) {
            totalPriceEquipment += helmetPrice;
        } 
        if(game % 3 == 0) {
            totalPriceEquipment += swordPrice;
        }
        if (game % 6 == 0) {
            totalPriceEquipment += shieldPrice;
        } 
        if (game % 12 == 0) {
            totalPriceEquipment += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalPriceEquipment.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )