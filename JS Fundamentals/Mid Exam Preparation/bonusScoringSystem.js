function bonusScoringSystem(params) {
    let studentsCount = Number(params.shift());
    let lecturesCount = Number(params.shift());
    let additionalBonus = Number(params.shift());
    let attendanceOfEachStudent = params;
    let maxBonus = 0;
    let maxLecture = 0;

    for (let index = 0; index < studentsCount; index++) {
        let currLectureCount = attendanceOfEachStudent[index];
        let totalBonus = currLectureCount / lecturesCount * (5 + additionalBonus);

        if(totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxLecture = currLectureCount;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxLecture} lectures.`);
}

bonusScoringSystem(['5',  '25', '30',
    '12', '19', '24',
    '16', '20'])
  