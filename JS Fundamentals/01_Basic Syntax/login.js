function login(strings) {
    let username = strings.shift();
    let pass = username.split(``).reverse();
    let reversedPass = pass.join("");
    let incorrectPass = 0;

    for (let i = 0; i < strings.length; i++) {
        let element = strings[i];
        if(element === reversedPass) {
            console.log(`User ${username} logged in.`);
        } else {
            if(incorrectPass == 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
        incorrectPass++;
    }
}

login(['momo','omom'])