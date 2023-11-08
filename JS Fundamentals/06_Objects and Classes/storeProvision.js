function storeProvision(currentStock, products) {
    let store = [];

    for (let i = 0; i < currentStock.length; i+=2) {
        let productName = currentStock[i];
        let quantity  = Number(currentStock[i + 1]);
        store[productName] = quantity;
    }
    for (let n = 0; n < products.length; n+=2) {
        let productName = products[n];
        let quantity  = Number(products[n + 1]);

        if (!store.hasOwnProperty(productName)) {
            store[productName] = 0;
        } 
        store[productName] += quantity;
    }
    for (let key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])