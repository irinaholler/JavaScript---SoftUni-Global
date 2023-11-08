function heartDelivery(commands) {
    let houses = commands.shift().split("@").map(Number);
    let delivered = commands.pop();
    let cupid = 0;

    for (let index = 0; index < commands.length; index++) {
        let element = commands[index];
        let currentElement = element.split(" ");
        let jumpCupid = Number(currentElement[1]);
        cupid++;

        if (jumpCupid > 0) {

        }
        for (let j = 0; j < houses.length; j++) {
            let numHouses = houses[j];
            let cur = houses[jumpCupid];
            let currentJump = cur - 2; 
            console.log(currentJump);
            
            if(cupid > houses.length) {
                cupid = 0;
            }
            
            if(numHouses == 0) {
                console.log(`Place ${numHouses} already had Valentine's day.`);
            } 
        }
        
    }
    console.log(cupid);
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
