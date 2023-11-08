function dishwasher(input) { // na men tazi zadacha mi izliza no judge ne q priema
    let index = 0;
    let bottles = Number(input[index]);
    index++;
    let command = input[index];
 
    let totalDishSoap = bottles * 750;
    let plate = 0; 
    let tenjera = 0; 
    let counter = 0;
    let razhod = 0;
 
    while (command !== "End") {
        let dishes = Number(command);
        counter++;

        if(razhod > totalDishSoap) {
            let leftSoap = Math.abs(razhod - totalDishSoap);
            console.log(`Not enough detergent, ${leftSoap} ml. more necessary!`);
            break;
        }
 
        if (counter === 3) {
            razhod += dishes * 15;
            tenjera += dishes;
            counter = 0;
        } else {
            razhod += dishes * 5;
            plate += dishes;
        }
        index++;
        command = input[index];
    }
 
    if (command === "End") {
        let leftSoap = Math.abs(razhod - totalDishSoap);
        console.log("Detergent was enough!");
        console.log(`${plate} dishes and ${tenjera} pots were washed.`);
        console.log(`Leftover detergent ${leftSoap} ml.`);
    }
}

dishwasher([2, 53, 65, 55, "End"]);
