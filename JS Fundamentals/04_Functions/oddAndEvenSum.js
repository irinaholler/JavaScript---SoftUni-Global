function oddAndEvenSum(params) {
    let stringNum = String(params);
    let odd = 0;
    let even = 0;
    
    for (let i = 0; i < stringNum.length; i++) {
        let elements = Number(stringNum[i]);
        if (elements % 2 === 0) {
            even += elements;
        } else {
            odd += elements;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435);