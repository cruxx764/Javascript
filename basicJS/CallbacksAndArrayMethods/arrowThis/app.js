const person = {
    firstName : 'Vigo',
    lastName : 'Mortenson',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName())

const person1 = {
    firstName : 'Vigo',
    lastName : 'Mortenson',
    fullName : () => {
        // 'this' will only be valid up to the arrow function, as that is where its scope ends 
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person1.fullName())
//outputs undefined 