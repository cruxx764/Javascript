const numbers = [1,2,3,4,5,6,7,8,9,10]

const result = numbers.filter(n => n === 4)


console.log(result)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// Filter checks for properties within object where score is greater than 80 and creates new array in 'goodMovies1'
const goodMovies1 = movies.filter( movie => movie.score > 80)
console.log(goodMovies1)

// second function expression takes the array above and maps the titles only to a new array
const goodTitles =  goodMovies1.map(m => m.title)
console.log(goodTitles)

// can be shortened by chaining methods together 
let goodMovies2 = movies.filter( m => m.score > 80).map(m => m.title)
console.log(goodMovies2)

// can also be clearned up by seperating methods to their own lines 
let goodMovies3 =  movies
    .filter( m => m.score > 80)
    .map(m => m.title)

console.log(goodMovies3)


const names = (['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'])
let nameCheck = names.filter( n => n.length < 10)
console.log(nameCheck)


function validUserNames (arrg) {
    return checkedNames = arrg.filter( n => n.length < 10)
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']))


