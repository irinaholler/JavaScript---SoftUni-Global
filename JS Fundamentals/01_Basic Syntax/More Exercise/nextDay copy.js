function solve(year, month, day) {
    if (year < 10) {
        year = Number(`190${year}`);
    } else if (year < 100) {
        year = Number(`19${year}`);
    }

    let newDay = day + 1;
    let newMonth = month;
    let newYear = year;
    if (month === 2 && newDay > 28) {
        if (year % 4 === 0 && newDay > 29) {
            newMonth += 1;
            newDay = 1;
        } else if (year % 4 !== 0) {
            newMonth += 1;
            newDay = 1
        }
    }
    if (newDay > 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) {
        newDay = 1;
        if (month === 12) {
            newMonth = 1;
            newYear += 1
        }
        newMonth += 1;
    } else if (newDay > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
        newDay = 1;
        newMonth += 1;
    }

    console.log(`${newYear}-${newMonth}-${newDay}`)
}
solve(2016, 9, 30); // 2016-10-1
solve(2020, 3, 24); //2020-3-25
solve(2014, 2, 28); //2014-3-1
solve(2012, 2, 29); //2020-3-1
solve(2011, 2, 28); //2020-3-1
solve(2016, 2, 28); //2016-2-29
solve(1, 1, 1); //1901-1-2
solve(99, 1, 1); //1999-1-2

nextDay(2016, 9, 30)