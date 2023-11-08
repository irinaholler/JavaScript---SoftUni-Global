function fancyBarcodes(params) {
    let n = Number(params.shift());
    let barcodePattern = /(?<start>@#+)(?<product>[A-Z]\w{4,}[A-Z])(?<end>@#+)/;
    let digitsPattern = /\d/g;

    for (let i = 0; i < n; i++) {
        let currentBarcode = params.shift();
        let match = currentBarcode.match(barcodePattern);
        
        if(match !== 0) {
            match = match[0];
            let matchDig = match.match(digitsPattern);

            if(matchDig !== null) {
                console.log(`Product group: ${matchDig.join("")}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])