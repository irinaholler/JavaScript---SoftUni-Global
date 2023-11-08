function secretChat(input) {
    let message = input.shift();

    for (let line of input) {
        line = line.split(':|:');
        let command = line[0];

        if (command !== 'Reveal') {
            if (command === "InsertSpace") {
                let index = Number(line[1]);
                let first = message.substring(0, index);
                let second = message.substring(index);
                message = first + ' ' + second;
                console.log(message);
            } else if (command === "Reverse") {
                let substring = line[1];
                if (message.includes(substring)) {
                    let index = message.indexOf(substring);
                    if (index !== -1) {
                        let first = message.substring(0, index);
                        let second = message.substring(index + substring.length);
                        let reversed = substring.split('').reverse().join('');
                        message = first + second + reversed;
                        console.log(message);
                    }
                } else {
                    console.log('error')
                }
                    // let reversed = substring.split('').reverse().join('');
                    // message = message.replace(substring, reversed);
            } else if (command === 'ChangeAll') {
                let substring = line[1];
                let replacement = line[2];
                while (message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
                console.log(message);
            }
        } else if (command === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])

