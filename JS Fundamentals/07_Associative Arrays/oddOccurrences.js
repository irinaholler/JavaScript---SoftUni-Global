function oddOccurrences(params) {
    let areEqual = params.toLowerCase();
    let newLine = areEqual.split(" ");
    let result = {};
    let output = [];
    
    for (let word of newLine) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    let objWords = Object.entries(result);
    let newWords = objWords.sort((a,b) => b[1] - a[1]);
    let sortWords = newWords.filter(word => {
        if (word[1] % 2 !== 0) {
            let keyWord = word[0];
            output.push(keyWord);
        }
    })
    console.log(output.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log("----");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')