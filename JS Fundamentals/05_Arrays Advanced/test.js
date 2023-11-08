function dark(array) {
    let sortArr = array.sort((a, b) => a.length - b.length);
    console.log(sortArr);
}
dark(['alpha', 'beta', 'gamma'])

