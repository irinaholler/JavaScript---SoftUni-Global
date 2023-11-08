    function simpleCalculator(numOne, numTwo, operator) {
        let result = 0;
        if(operator == "multiply") {

            result = simpleCalculator.filter(multiply => multiply.numOne * multiply.numTwo);
            console.log(result);
        }
        console.log(result);
    }

simpleCalculator(5, 5, 'multiply')