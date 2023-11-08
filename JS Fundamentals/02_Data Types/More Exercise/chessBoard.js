function chessBoard(num) {
    console.log(`<div class="chessboard">`);
    let counter = 0;

    for (let index = 1; index <= num; index++) {
        let element = Number(index);
        counter++;

        if (element % 2 !== 0) {
            console.log(`<div>`);
            for (let j = 0; j < num; j++) {
                if (counter % 2 === 0) {
                    console.log(`<span class="black">`);
                } else {
                    console.log(`<span class="white"></span>`);
                }
            }
        } else {
            console.log(`<div>`);
            for (let j = 0; j < num; j++) {
                console.log(`<span class="white"></span>\n
                <span class="black"></span>`);

            }
            console.log(`</div>`);
        }
    }
    console.log(`</div>`);
}

chessBoard(3)