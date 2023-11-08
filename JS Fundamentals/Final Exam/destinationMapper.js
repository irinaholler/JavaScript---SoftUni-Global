function destinationMapper(text) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(text);
    let destinations = [];
    let travelPoints = 0;

    while (match !== null) {
        let places  = match[2];
        travelPoints += places.length;
        destinations.push(places);

        match = pattern.exec(text);
    }
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")