function name(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let element = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = element;
        
    }
    console.log(arr);
}

name(['a', 'b', 'c', 'd', 'e'])