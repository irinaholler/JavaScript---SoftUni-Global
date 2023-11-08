function heartDelivery(commands) {
    let houses = commands.shift().split("@").map(Number);
    let index = 0;
    let cupid = 0;

    while (commands[index] !== "Love!") {
        let command = commands[index].split(" ");
        let jumpCupid = Number(command[1]);
        cupid += jumpCupid;

        if(cupid > houses.length) {
            cupid = 0;
        }

        let currentHouse = houses[cupid];
        console.log(currentHouse);

        for (let index = 0; index < command.length; index++) {
            let currentCommands = command[index];

            for (let j = 0; j < houses.length; j++) {
                if (houses[j] > 0) {
                    houses[cupid] -= 2;
                }
                
                if(houses[j] == 0) {
                    console.log(`Place ${houses[cupid]} has Valentine's day.`);
                } 
            }
        }
        index++;
    }
    console.log(cupid);
    console.log(houses);
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
