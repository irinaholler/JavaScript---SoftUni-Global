function needForSpeed(params) {
    let n = Number(params.shift());
    let maxMileage = 100000;
    let minMileage = 10000;
    let tankMax = 75;
    let result = {};

    for (let i = 0; i < n; i++) {
        let [model, mileage, fuelAvailable] = params.shift().split("|");

        result[model] = {
            'mileage': Number(mileage),
            'fuelAvailable': Number(fuelAvailable)
        }
    }
    console.log(result);
    
    let command = params.shift();
    while(command !== 'Stop') {
        command = command.split(' : ');
        let name = command[1];
       
        if (command[0] === 'Drive') {
            let distance = Number(command[2]);
            let fuel = Number(command[3]);

            if (result[model]['fuelAvailable'] < fuel) {
                console.log('Not enough fuel to make that ride');
            }
          
        } else if (command[0] === 'Refuel') {
            
        } else if (command[0] === 'Revert') {
            
        }
        

        command = params.shift();
    }
 
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])