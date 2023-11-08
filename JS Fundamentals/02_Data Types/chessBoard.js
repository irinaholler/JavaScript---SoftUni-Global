function chessBoard(num) {
    console.log(`<div class="chessboard">`);
    let counter = 0;

    for (let index = 0; index < num; index++) {
        counter++;
        console.log(` <div>`);
            for (let b = 0; b < num; b++) {
                if (counter % 2 !== 0) {
                    if (b % 2 === 0) {
                        console.log(`\t\t<span class="black"></span>`);
                    } else {
                        console.log(`\t\t<span class="white"></span>`);
                    }
                } else {
                    if (b % 2 === 0) {
                        console.log(`\t\t<span class="white"></span>`);
                    } else {
                        console.log(`\t\t<span class="black"></span>`);
                    }
                }
            }
        console.log(` </div>`);
    }
    console.log(`</div>`);
}
chessBoard(6)