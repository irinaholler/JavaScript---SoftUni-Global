function triangleArea(a, b, c) {
    let sides = a + b + c / 2;
    let area = Math.sqrt(sides * (sides - a)*(sides - b)*(sides - c));

    console.log(area);
}

triangleArea(2,
    3.5,
    4)

