function chessBoard(num) {
    console.log(`<div class="chessboard">`);
    let counter = 0;

    for (let index = 1; index <= num; index++) {
        let element = Number(index);
      
        console.log(`\t<div>`);
            for (let j = 0; j < num; j++) {
                counter++;
                if (counter % 2 !== 0) {
                    console.log(`\t\t<span class="black"></span>`);
                } else {
                    console.log(`\t\t<span class="white"></span>`);
                }
            }
        console.log(`\t</div>`);
    }
    console.log(`</div>`);
}
chessBoard(3)