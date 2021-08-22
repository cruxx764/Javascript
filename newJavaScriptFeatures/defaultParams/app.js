
// Old method 
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

// New method
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

console.log(rollDie())


//Default parameters should always come second, or after any parameters that are not default
function greet(person, msg = "Hello") {
    console.log(`${msg}, ${person}!`)
}
console.log(greet('Jaquine'))