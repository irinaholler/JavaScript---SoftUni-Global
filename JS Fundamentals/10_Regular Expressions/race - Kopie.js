function race(params) {
    let participants = params.shift().split(", ");
    
    for (let line of params) {
        let matchName = line.match(/[A-Za-z]/g).join("");
        let matchDistance = line.match(/\d/g);
        
        if(line !== 'end of race') {   
            let distance = 0;
            for (let meter of matchDistance) {
                distance += Number(meter);
            }
        }
        if(participants.includes(matchName)) {
            
        }
        
    }
    
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])