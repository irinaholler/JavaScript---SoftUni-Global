function meetings(params) {
    let storedInfo = {};

    for (let lines of params) {
        let [dayOfWeek, name] = lines.split(" ");
        
        if(storedInfo.hasOwnProperty(dayOfWeek)) {
            console.log(`Conflict on ${dayOfWeek}!`);
        } else {
            storedInfo[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        }
    }
    for (let day in storedInfo) {
        console.log(`${day} -> ${storedInfo[day]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])