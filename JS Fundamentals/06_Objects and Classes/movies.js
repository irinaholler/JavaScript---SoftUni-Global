function movies(params) {
    let name = [];
    for (let lines of params) {
        if(lines.includes('addMovie')) {
            let command = lines.shift().split(" ");
            name.push(lines);
        }
    }
    console.log(name);
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])