function vacation(people, type, day) {
    let price = 0;
    if (type === "Students") {
        switch (day) {
            case "Friday": price = people * 8.45; break;
            case "Saturday": price = people * 9.80; break;
            case "Sunday": price = people * 10.46; break;
        }
        if (people >= 30) {
            price = price - (price * 0.15);
        }
    } else if (type === "Business") {
        switch (day) {
            case "Friday": price = people * 10.90; break;
            case "Saturday": price = people * 15.60; break;
            case "Sunday": price = people * 16; break;
        }
        if (people >= 100) {
            switch (day) {
                case "Friday": price = (people - 10) * 10.90; break;
                case "Saturday": price = (people - 10) * 15.60; break;
                case "Sunday": price = (people - 10) * 16; break;
            }
        }
    } else if (type === "Regular") {
        switch (day) {
            case "Friday": price = people * 15; break;
            case "Saturday": price = people * 20; break;
            case "Sunday": price = people * 22.50; break;
        }
        if (people >= 10 && people <= 20) {
            price = price - (price * 0.05);
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
)