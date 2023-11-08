function searchForaNumber(firstArray, secondArray) {
    let takenNumbers = secondArray[0];
    let deletedElements = secondArray[1];
    let searchNumber = secondArray[2];
    let counter = 0;
    
    let newArray = firstArray.splice(0, takenNumbers);
    newArray = newArray.splice(deletedElements);
    console.log(newArray);
    for (let iterator of newArray) {
        if(iterator === searchNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${counter} times.`);
}

searchForaNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )