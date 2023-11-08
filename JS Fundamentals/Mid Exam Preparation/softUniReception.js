function softUniReception(params) {
    params = params.map(Number);
    let students = params.pop();
    let employee1 = params[0];
    let employee2 = params[1];
    let employee3 = params[2];
    let hours = 0;

    let answerPerHour = employee1 + employee2 + employee3;

        while (students > 0) {
            hours++;
            if(hours % 4 === 0) {
                hours += 1;
            }
            students -= answerPerHour;
        }
    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5','6','4','20'])
console.log("---");
softUniReception(['1','2','3','45']);