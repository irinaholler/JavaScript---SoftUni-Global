function treasureHunt(items) {
    let treasureChest = items.shift().split("|");
    let index = 0;
    let commands = items[index];
    index++;
    let sum = 0;

    while (commands !== "Yohoho!") {
        let command = commands.split(" ");
        let operation = command.shift();

        if (operation === "Loot") {
            for (let loot of command) {
                if (!treasureChest.includes(loot)) {
                    treasureChest.splice(0, 0, loot);
                }
            }
        } else if (operation === "Drop") {
            let dropIndex = Number(command[0]);
            if (dropIndex > 0 || dropIndex <= treasureChest.length) {
                let removedLoot = treasureChest.splice(dropIndex, 1);
                treasureChest.push(removedLoot);
            }
        } else if (operation === "Steal") {
            let count = Number(command[0])
            let removedLoots = treasureChest.splice(-count);
            console.log(removedLoots.join(", "));
        }
        commands = items[index];
        index++;
    }
    let sumLength = 0;
    if (treasureChest.length > 0) {
        for (let iterator of treasureChest) {
            sumLength += iterator.length;
        }
    }
    if (treasureChest.length > 0) {
        let avg = sumLength / treasureChest.length;
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
