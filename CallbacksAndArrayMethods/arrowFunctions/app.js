// const add = function (x,y) {
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x * x;
// }

// function doubleSquare (arrg) {
//     return square(arrg) * 2;
// }

// console.log(doubleSquare(2))

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) +1
// }

// console.log(rollDie())


// Arrow functions also have 'implicit returns', we can leave out the 'return' keyword in cettain situations

// const rollDie = () => (
//     Math.floor(Math.random() * 6) +1
// )
// console.log(rollDie())

// const add = (a,b) => a + b

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

// can now be written as
const newMovies = movies.map( movie => `${movie.title} - ${movie.score / 10}`)

console.log(newMovies)