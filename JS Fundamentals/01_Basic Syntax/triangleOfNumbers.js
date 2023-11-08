function triangleOfNumbers(param) {
    for (let i = 1; i <= param; i++) {
        let piramid = ``;
        for (let j = 1; j <= i; j++) {
            let element = i;
            piramid += `${element} `;
        } 
        console.log(piramid);  
    }
}

triangleOfNumbers(5)