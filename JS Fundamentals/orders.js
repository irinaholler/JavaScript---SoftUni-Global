function orders(string, num) {
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    let price = 0;
    
    for (let i = 1; i <= num; i++) {
        switch(string) {
            case "coffee": price = i * 1.50; break;
            case "water": price = i * 1.00; break;
            case "coke": price = i * 1.40; break;
            case "snacks": price = i * 2.00; break;
        }
    }
    console.log(price.toFixed(2));
}

orders("coffee", 2)