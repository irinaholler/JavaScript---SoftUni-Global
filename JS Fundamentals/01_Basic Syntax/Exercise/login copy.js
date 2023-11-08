function login(input) {
    let userName = input.shift();
    let revercedWords = userName.split("").reverse().join('');
    let tryPass = 0;

    for (let i = 0; i < input.length; i++) {
        let words = input[i];

        if (words === revercedWords) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            tryPass++;
        }
        if (tryPass == 4) {
            console.log(`User ${userName} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])