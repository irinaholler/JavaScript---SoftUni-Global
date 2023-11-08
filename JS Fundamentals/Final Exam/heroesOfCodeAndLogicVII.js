function heroesOfCodeAndLogic(params) {
    let n = Number(params.shift());
    let heroes = {};
    
    for (let i = 0; i < n; i++) {
        // let heroInfo = params.shift().split(" ");
        // let name = heroInfo[0];
        // let hitPoints = Number(heroInfo[1]);
        // let manaPoints = Number(heroInfo[2]);
        let [name, hitPoints, manaPoints] = params.shift().split(" ");
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        heroes[name] = {
            hp: hitPoints,
            mp: manaPoints
        }


        // a hero can have a maximum of 100 HP and 200 MP

        console.log(); 
    }
    console.log(heroes); 
}

heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])