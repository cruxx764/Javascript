
// Keyword this refers to properties within the same object 
const cat = {
    name : 'Blue Steele',
    color : 'grey',
    breed : 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOOOOW`)
    } 
}

console.log(cat.meow())

// Value of this can change depending on how the function is called 

const meow2 = cat.meow
meow2()

const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg(){
        this.eggCount++
        return 'EGG'
    }
}


console.log(hen.name)
console.log(hen.eggCount)
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)


