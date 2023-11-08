function simpleCalculator(a, b, action) {
    let result = 0;

    if(action == "multiply") {
        result = a * b;
    }
    if(action == "divide") {
        result = a / b;
    }
    if(action == "add") {
        result = a + b;
    }
    if(action == "subtract") {
        result = a - b;
    }
    console.log(result);
}

simpleCalculator(5, 5, 'divide')