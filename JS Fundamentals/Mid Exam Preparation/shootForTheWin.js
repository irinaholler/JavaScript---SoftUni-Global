function shootForTheWin(params) {
    let shotTargets = params.shift().split(" ").map(Number);
    let end = params.pop();
    let indexTargets = params.map(Number);
    let count = 0;
    
        for (let index = 0; index < indexTargets.length; index++) {
            let targets = indexTargets[index];
            let currentShooTarget = shotTargets[targets];

            if (currentShooTarget > -1) {
                shotTargets[targets] = - 1;
                count++;
            
                for (let j = 0; j < shotTargets.length; j++) {
                    if (shotTargets[j] > -1) {
                        if (shotTargets[j] > currentShooTarget) {
                            shotTargets[j] -= currentShooTarget
                        } else {
                            shotTargets[j] += currentShooTarget
                        }
                    }
                }
            }
        }
        console.log(`Shot targets: ${count} -> ${shotTargets.join(" ")}`);
}

shootForTheWin((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]))