function chessBoard(num) {
    console.log(`<div class="chessboard">`);

    for (let index = 1; index <= num; index++) {
        let element = Number(index);
        
        if(element % 2 !== 0) {
            console.log(`<div>`);
            for (let j = 0; j < num; j++) {
                console.log(`<span class="black"></span>\n
                <span class="white"></span>`);
                
            }
            console.log(`</div>`);
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