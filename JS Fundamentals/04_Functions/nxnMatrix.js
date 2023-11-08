function nxnMatrix(param) {
    for (let i = 0; i < param; i++) {
        let matrix = [];
        for (let j = 0; j < param; j++) {
            let stringJ = String(param);
            matrix.push(stringJ)
        }
        console.log(matrix.join(" "));
    }
}

nxnMatrix(3)