function songs(params) {
    class Songs {
        constructor(typeList, name, time) {
            this.type = typeList;
            this.name = name,
            this.time = time
        }
    }
    let numbOfSongs = Number(params.shift());
    let typeSong = params.pop();
    let allSongs = [];

    for (let i = 0; i < numbOfSongs; i++) {
        let [type, name, time] = params[i].split("_");
        time = Number(time);
        let listSongs = new Songs(type, name, time);
        allSongs.push(listSongs);
    }
    if(typeSong === "all") {
        printSongs(allSongs);
    } else {
        let searchedSongs = allSongs.filter(s => s.type === typeSong);
        printSongs(searchedSongs);
    }
    function printSongs(allSongs) {
        for (let song of allSongs) {
            console.log(song.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])