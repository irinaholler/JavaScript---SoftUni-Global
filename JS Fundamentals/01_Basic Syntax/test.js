function balls(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFood = 0;
    let catFood = 0;
    let biscuits = 0;
    let ateFood = 0;
    let ateDogFood = 0;
    let ateCatFood = 0;
    let curDay = 0;

    for (let day = 1; day <= days; day++) {
        curDay++;
        let dogFood = 0;
        let catFood = 0;

        for (let index = 2; index < input.length; index+=2) {
            let curDogFood = Number(input[index]);
            dogFood += curDogFood;
            let curCatFood = Number(input[index + 1]);
            catFood += curCatFood;

            if (curDay % 3 === 0) {
                biscuits = (curDogFood + curCatFood) * 0.10;
            }
        }
        let totalFood = dogFood + catFood;
        ateFood = totalFood / food * 100;
        ateDogFood = dogFood / totalFood * 100;
        ateCatFood = catFood / totalFood * 100;
    }
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${ateFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${ateDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${ateCatFood.toFixed(2)}% eaten from the cat.`);
}

balls(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
