// The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
class Pet {
    constructor(name, age) {
        console.log('IN PET CONSTRUCTOR')
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    woof() {
        return 'WOOF!';
    }
};



//Cat/Dog classes are missing the 'constructor' keyword, however, because they are 'extensions' of the 'Pet' class, JS knows to include them in the parent constructor. 
// The super keyword is a reference to what we are extending from - it prevents duplicaiton when we want to use the properties of a parent constructor in a child + new properties 
class Cat extends Pet {
    constructor(name, age, livesLeft = 9){
        console.log('IN CAT CONSTRUCTOR')
        super(name,age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEEOOOWW!!!';
    }
};

class Dog extends Pet {
    bark() {
        return 'WOOF!';
    }
    eat() {
        return `${this.name} scarfs his food!`;
}
};

const wyatt = new Dog('Wyatt', 13);

// returns
// Dog {name: 'Wyatt', age: 13}
// age: 13
// name: "Wyatt"
// [[Prototype]]: Pet
// bark: ƒ bark()
// constructor: class Dog
// [[Prototype]]: Object
// constructor: class Pet
// eat: ƒ eat()
// woof: ƒ woof()
// [[Prototype]]: Object




