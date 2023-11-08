function treasureHunt(items) {
    let treasureChest = items.shift().split("|");
    let index = 0;
    let commands = items[index];
    index++;
    let sumLength = 0;
    let sum = 0;

    while (commands !== "Yohoho!") {
        let command = commands.split(" ");
        let operation = command.shift();

        if (operation === "Loot") {
            for (let loot of command) {
                if (!treasureChest.includes(loot)) {
                    treasureChest.splice(0, 0, loot)
                }
            }
        } else if (operation === "Drop") {
            let removedLoot = treasureChest.splice(command, 1);
            treasureChest.push(removedLoot);
        } else if (operation === "Steal") {
            let removedLoots = treasureChest.splice(-command);
            console.log(removedLoots.join(", "));
        }
        commands = items[index];
        index++;
    }
    if (treasureChest.length > 0) {
        for (let loots of treasureChest) {
            sumLength += loots.length;
        }
    }
    sum += treasureChest.length;
    let avg = sumLength / sum;
    if (treasureChest.length > 0) {
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
