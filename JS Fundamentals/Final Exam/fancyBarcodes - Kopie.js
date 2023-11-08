function fancyBarcodes(params) {
    let n = Number(params.shift());
    let barcodePattern = /(?<start>@#+)(?<product>[A-Z]\w{4,}[A-Z])(?<end>@#+)/;
    let digitsPattern = /\d/g;

    for (let i = 0; i < n; i++) {
        let currentBarcode = params.shift();
        
        if(barcodePattern.test(currentBarcode)) {
            let match = currentBarcode.match(barcodePattern);
            let barcode = match[2];
               let productGroup = [...barcode]
                .filter(symbol => /\d/.test(symbol))
                .join("");
                
            if(productGroup !== ``) {
                console.log(`Product group: ${productGroup}`);
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