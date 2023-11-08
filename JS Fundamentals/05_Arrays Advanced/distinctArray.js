function distinctArray(array) {
    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        let element1 = array[index];

        for (let j = index + 1; j < array.length; j++) {
            let  element2 = array[j];

            if (element1 == element2) {
                array.splice(j, 1);
                j = j - 1
            }
        }
    }
    console.log(array.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])