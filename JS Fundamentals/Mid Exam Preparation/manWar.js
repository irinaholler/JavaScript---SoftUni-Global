function manWar(params) {
    let pirateShip = params.shift().split(">").map(Number);
    let warship = params.shift().split(">").map(Number);
    let maxHealthCapacity = Number(params.shift());

    for (let commands of params) {
        let command = commands.split(" ");

        if (command[0] === "Fire") {
            let index = Number(command[1]);
            let damage = Number(command[2]);
            if (index < 0 || index > warship.length - 1) {
                continue;
            } else {
                warship[index] -= damage;
                if (warship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command[0] === "Defend") {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            let damage = Number(command[3]);
            if (startIndex >= 0 && endIndex < pirateShip.length) {
                for (let k = startIndex; k <= endIndex; k++) {
                    pirateShip[k] -= damage;
                    if (pirateShip[k] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command[0] === "Repair") {
            let index = Number(command[1]);
            let health = Number(command[2]);
            if (index >= 0 && index < pirateShip.length) {
                if (pirateShip[index] + health <= maxHealthCapacity) {
                    pirateShip[index] += health;
                } else {
                    pirateShip[index] = maxHealthCapacity
                }
            }
        } else if (command[0] === "Status") {
            let count = 0;
            let lowerHealthCapacity = maxHealthCapacity * 0.20;
            let result = pirateShip.filter(el => el < lowerHealthCapacity);
            count += result.length;
            console.log(`${count} sections need repair.`);
        } else if (command[0] === "Retire") {
            break;
        }
    }
    let pirateShipSum = 0;
    for (let el of pirateShip) {
        pirateShipSum += el;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    let warshipSum = 0;
    for (let el of warship) {
        warshipSum += el;
    }
    console.log(`Warship status: ${warshipSum}`);
}

manWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])