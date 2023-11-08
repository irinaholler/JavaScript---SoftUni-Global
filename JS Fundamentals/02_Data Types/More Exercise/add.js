function addRemove(input) {

    let arr = [];
    let inputL = input.length;
    let increment = 0;

    for (let i = 0; i < inputL; i++) {
        increment++;
        if (input[i].includes('add')) {
            arr.push(increment);
        } else if (input[i].includes('remove')) {
            arr.pop();
        }
    }

    console.log(arr.join(" "));

}

addRemove(['add', 'add', 'remove', 'add', 'add'])