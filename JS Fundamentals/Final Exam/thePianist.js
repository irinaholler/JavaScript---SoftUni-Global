function thePianist(params) {
    let n = Number(params.shift());
    let pieces  = [];
    let catalog = {};

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = params.shift().split("|");

        catalog[name] = {
            composer,
            key
        };
        console.log();
    }
    console.log();

    let data = params.shift();
    while (data !== 'Stop') {
        data = data.split('|');
        let name = data[1];

        if (data === 'Add') {
            
        } else if (data === 'Remove') {
            
        } else if (data === 'ChangeKey') {
            
        }
        
        
        console.log(data);
        data = params.shift();
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])