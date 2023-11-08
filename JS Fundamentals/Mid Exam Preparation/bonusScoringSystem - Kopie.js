function bonusScoringSystem(params) {
    let studentsCount = Number(params.shift());
    let lecturesCount = Number(params.shift());
    let initialBonus = Number(params.shift());
    let students = params.sort((a, b) => b - a).shift();

    let totalBonus = students / lecturesCount * (5 + initialBonus);
        
        if(totalBonus > 0) {
            console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
            console.log(`The student has attended ${students} lectures.`);
        } else {
            console.log(`Max Bonus: 0.`);
            console.log(`The student has attended 0 lectures.`);
        }
}

bonusScoringSystem(['5',  '25', '30',
    '12', '19', '24',
    '16', '20'])
  