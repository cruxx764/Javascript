const person = {firstName: "Mick", lastName: "Jagger"};
const years = { 1999: 'Good', 2020: 'Bad'};

// const keys = Object.keys(person);

// console.log(Object.keys(person));

    // Initialize gimli object
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

gimli.age = 27
gimli.age = 37


gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
};

// delete gimli.weapon;

gimli;

