function gladiatorInventory(array) {
    let inventory  = array.shift().split(` `);

    for (let command of array) {
        let newParams = command.split(` `);
        let curCommand = newParams[0];
        let equipment = newParams[1];
        let isIncluded = inventory.includes(equipment);
        
        if (curCommand === "Buy") {
            if (!isIncluded) {
                inventory.push(equipment);
            }
        } else if (curCommand === "Trash") {
            if(isIncluded){
                let trashEquipment = inventory.indexOf(equipment, 1);
                inventory.splice(trashEquipment, 1);
            }
        } else if (curCommand === "Repair") {
            if (isIncluded) {
                let repEquipment = inventory.indexOf(equipment);
                inventory.splice(repEquipment, 1);
                inventory.push(equipment);
            }
        } else if (curCommand === "Upgrade") {
            let tempSplit = newParams[1].split("-");
            if (inventory.includes(tempSplit[0])) {
                let tempIndex = inventory.indexOf(tempSplit[0]);
                let upgradeUnion = tempSplit.join(":");
                inventory.splice(tempIndex + 1, 0, upgradeUnion);
            }
        }   
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);
console.log("---");
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])
