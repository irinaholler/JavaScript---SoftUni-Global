function bombNumbers(array1, array2) {
    let bombNumber = array2[0];
    let power = array2[1];
    let indexOfBomb = array1.indexOf(bombNumber);
 
    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - power);
        let explosionLength = power * 2 + 1;
        array1.splice(startExplosionIndex, explosionLength);
        indexOfBomb = array1.indexOf(bombNumber);
    }
 
    let sum = array1.reduce((a, b) => a + b, 0);
    console.log(sum);
}

bombNumbers([4, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
console.log("----------");
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])