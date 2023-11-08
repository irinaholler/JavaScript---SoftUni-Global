function movingTarget(params) {
    let targets = params.shift().split(" ").map(Number);
    let i = 0;

    while (params[0] !== 'End') {
        let tokens = params.shift().split(' ');
        let command = tokens[0];
        let index = Number(tokens[1]);

        if (command === "Shoot") {
            let power = Number(tokens[2]);
            if (index >= 0 || index < targets.length) {
                targets[index] -= power;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (command === "Add") {
            let value = Number(tokens[2]);
            if (index > 0 && index <= targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === "Strike") {
            let radius = Number(tokens[2]);
            let startIndex = index - radius;
            let endIndex = index + radius; 
            let count = radius * 2 + 1;

            if (index >= 0 && index < targets.length) {
                if (startIndex >= 0 && endIndex < targets.length) {    
                    targets.splice(startIndex, count);
                } else {
                    console.log(`Strike missed!`);
                }
            } 
        }
        i++;
    }
    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
console.log("___-----_____");
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])