function theatrePromotions(day, age) {
    let tichetPrice = -1;

    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday": tichetPrice = 12; break;
            case "Weekend": tichetPrice = 15; break;
            case "Holiday": tichetPrice = 5; break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday": tichetPrice = 18; break;
            case "Weekend": tichetPrice = 20; break;
            case "Holiday": tichetPrice = 12; break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday": tichetPrice = 12; break;
            case "Weekend": tichetPrice = 15; break;
            case "Holiday": tichetPrice = 10; break;
        }
    }
    if (tichetPrice != -1) {
        console.log(`${tichetPrice}$`);
    } else {
        console.log("Error!");
    }
}

theatrePromotions('Weekday', -42)