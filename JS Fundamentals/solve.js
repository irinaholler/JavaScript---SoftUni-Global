function convertor(catsData) {
    class Cat {
        constructor(catName, age) {
            this.name = catName;
            this.age = age
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let info of catsData) {
       let catInfo = info.split(" ");
       let name = catInfo[0];
       let age = Number(catInfo[1]);

       let cat = new Cat(name, age);
       cat.meow();
    }
}

convertor(['Mellow 2', 'Tom 5'])



