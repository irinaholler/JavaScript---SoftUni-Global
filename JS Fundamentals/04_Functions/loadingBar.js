function loadingBar(num) {
    let completedLoading = `%`.repeat(num / 10);
    let incompleteLoading = `.`.repeat(10 - completedLoading.length);
    let bar = completedLoading + incompleteLoading;

    if(num === 100) {
        console.log(`100% Complete!`);
    } else if(num >= 0 && num <=100) {
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(50)