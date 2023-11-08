function requiredReading(numPages, readPerHour, numDays) {
    let totalTime = numPages / readPerHour;
    let requiredHours = totalTime / numDays;
    console.log(requiredHours);
}

requiredReading(212, 20, 2)