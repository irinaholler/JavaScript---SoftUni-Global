function heartDelivery(params) {
    let numOfHearts = params.shift().split("@").map(Number);

    for (let work of params) {
        let workCupid = work.split(" ");
        let jumpHouse = workCupid[1];

        if(workCupid[index] === `Jump`) {
            for (let j = 1; j <= numOfHearts.length; j++) {
                console.log(j);
                if(numOfHearts[j] = 0) {
                    console.log(`Place ${numOfHearts[j]} has Valentine's day.`);
                }
                numOfHearts -= 2;
                console.log();
            }
            console.log();
        }
        
    }
    console.log();
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
