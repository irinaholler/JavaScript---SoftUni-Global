function nextDay(year, month, day) {
    let today = new Date(year, month, day + 1);

    let newYear = today.getFullYear();
    let newMonth = today.getMonth();
    let newDay = today.getDate();

    // Creating a new Date (with the delta)
    let newDate = new Date(year, month - 1, day + 1);

    console.log(`${newYear}-${newMonth}-${newDate}`);
}

nextDay(2020, 1, 31) 