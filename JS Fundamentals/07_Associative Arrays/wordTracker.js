function wordTracker(params) {
    let keyWord = params.shift().split(" ");
    let result = {};
     
    for (let word of keyWord) {
        result[word] = 0;         
    }
    for (let line of params) {
        if (result.hasOwnProperty(line)) {
            result[line]++;
        }
    }
    let sortWords = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for (let sorted of sortWords) {
        console.log(`${sorted[0]} - ${sorted[1]}`);
    }
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])