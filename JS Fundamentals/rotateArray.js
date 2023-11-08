function rotateArray(array) {
    let num = Number(array.pop());

    for (let r = 0; r < num; r++) {
        let tempArr = array.pop();
        array.unshift(tempArr);
    }
    console.log(array.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

