function biggestOf3Numbers(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num1 <= num2 && num3 <= num2) {
        return num2;
    } else if (num1 <= num3 && num2 <= num3) {
        return num3;
    }
}