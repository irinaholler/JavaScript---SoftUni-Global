function furniture(params) {
    let result = `Bought furniture:`;
    let sum = 0;

    for (let line of params) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/g;
        let match = pattern.exec(line);

        if(match) {
            result += `\n${match.groups.name}`;
            sum += Number(match.groups.price) * Number(match.groups.qty);
        }
    }
    console.log(result);
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])