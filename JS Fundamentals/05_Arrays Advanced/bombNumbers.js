function bombNumbers(bombField, bombRange){
    let bombNumber = bombRange[0];
    let bombExpRange = bombRange[1];

    let sum = 0;

    for (i = 0; i < bombField.length; i++){

        if(bombField.includes(bombNumber)){
            let bombNumberIndex = bombField.indexOf(bombNumber);
            let startIndex = bombNumberIndex - bombExpRange;
            let endIndex = startIndex + bombExpRange * 2 + 1; 
           bombField.splice(startIndex, endIndex-1);
        }
    }
    for (const el of bombField) {
        sum += el;
    }
    console.log(sum);
}

bombNumbers([4, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
console.log("----------");
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])