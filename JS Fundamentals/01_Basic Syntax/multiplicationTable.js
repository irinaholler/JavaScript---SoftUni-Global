function multiplicationTable(params) {
    for (let i = 1; i <= 10; i++) {
        let num = i;
        let mal = params * i;
        console.log(`${params} X ${i} = ${mal}`);  
    }   
}

multiplicationTable(5)