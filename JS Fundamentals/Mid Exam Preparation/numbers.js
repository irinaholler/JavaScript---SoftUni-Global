function numbers(params) {
    let paramsInt = params.split(" ").map(Number);
    let disNumbers = paramsInt.sort((a, b) => b - a);
    let sum = 0;
    let avNum = 0;
    let max = 0;

    for (let index = 0; index < disNumbers.length; index ++) {
        let newNumbers = disNumbers[index];
        sum += disNumbers[index];   
    }
    avNum = sum / disNumbers.length;    

    let biggerNum = disNumbers.filter(x => x > avNum);
    biggerNum = biggerNum.slice(0, 5);

    if(biggerNum.length < 5) {
        console.log("No");
    } else {
        console.log(biggerNum.join(" "));
    }
}

numbers('10 20 30 40 50')
console.log("---");
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log("---");
numbers('1')