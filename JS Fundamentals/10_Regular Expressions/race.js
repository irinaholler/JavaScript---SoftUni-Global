function race(params) {
    let participants = params.shift().split(", ");
    let matchName = /[A-Za-z]/g;
    let matchDistance = /\d/g;
    
    let line = params.shift();
    
    while (line !== 'end of race') {   
        console.log(line);
        
        line = params.shift();
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