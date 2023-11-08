function furniture(params) {
    let sum = 0;
    console.log(`Bought furniture:`);

    for (let line of params) {
        if (line === 'Purchase') {
            break;
        }
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/g;
        let match = pattern.exec(line);

        if(match) {
            sum += Number(match.groups.price) * Number(match.groups.qty);
            console.log(match.groups.name);
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])