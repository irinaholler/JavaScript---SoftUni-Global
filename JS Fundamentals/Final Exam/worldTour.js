function worldTour(params) {
    let travelStops = params.shift();
    let line = params.shift();
    
    while (line !== "Travel") {
        line = line.split(":");
        let command = line[0];

        if(command === 'Add Stop') {
            let index = Number(line[1]);

            if(index < 0 && index >= travelStops.length) {
                console.log(travelStops);
                break;
            }
            let string = line[2];
            let first = travelStops.slice(0, index);
            let second = travelStops.slice(index);
            travelStops = first + string + second;
            console.log(travelStops);
        } else if(command === 'Remove Stop') {
            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);

            if (travelStops[startIndex] && travelStops[endIndex]) {
                let firstPart = travelStops.substring(0, startIndex);
                let secondPart = travelStops.substring(endIndex + 1);
                travelStops = firstPart.concat(secondPart);
            }
            console.log(travelStops);
        } else if(command === 'Switch') {
            let oldString = line[1];
            let newString = line[2];
            if (travelStops.includes(oldString)) {
                travelStops = travelStops.replace(oldString, newString);
              }
            // let pattern = new RegExp(oldString, 'g');
            // travelStops = travelStops.replace(pattern, newString);
            console.log(travelStops);
        }
        line = params.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${travelStops}`);
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
