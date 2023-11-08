function gladiatorInventory(input){

    let arrInvent = input.shift().split(" ");

for (const el of input) {

    let tokens = el.split(" ");

    if(tokens.includes("Buy")){

        if(!arrInvent.includes(tokens[1])){
        arrInvent.push(tokens[1]);
         }

    }else if(tokens.includes("Trash")){
       
        if(arrInvent.includes(tokens[1])){
            let tempIndex = arrInvent.indexOf(tokens[1]);
            arrInvent.splice(tempIndex, 1);
        }

    }else if(tokens.includes("Repair")){

        if(arrInvent.includes(tokens[1])){

            let tempIndex = arrInvent.indexOf(tokens[1]);
                arrInvent.splice(tempIndex,1);
                arrInvent.push(tokens[1]);
            }

    }else if(tokens.includes("Upgrade")){

        let tempSplit = tokens[1].split("-");

        if(arrInvent.includes(tempSplit[0])){
            let tempIndex = arrInvent.indexOf(tempSplit[0]);
            let upgradeUnion = tempSplit.join(":");
            arrInvent.splice(tempIndex+1, 0, upgradeUnion);
        }
    }

    }

    console.log(arrInvent.join(" "));
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
