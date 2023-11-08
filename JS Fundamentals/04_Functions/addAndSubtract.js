function addAndSubtract(num1, num2, num3) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    let sumNum1NadNum2 = sum(num1, num2);

    function subtract(sumNum1NadNum2, num3) {
        return sumNum1NadNum2 - num3;
    }
    console.log(subtract(sumNum1NadNum2, num3));
}

addAndSubtract(23,
    6,
    10)