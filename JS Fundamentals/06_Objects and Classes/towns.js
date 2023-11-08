function towns(params) {
    for (let el of params) {
        let townInfo = el.split(" | " );
        let town = townInfo[0];
        let latitude = Number(townInfo[1]);
        let longitude = Number(townInfo[2]);

        let townData = {
            town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }
        console.log(townData);
    }    
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])