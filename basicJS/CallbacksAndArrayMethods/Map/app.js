// Array method which creates a new array with the result of calling a callback on every element in the array
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

// console.log(doubles)


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

const titles = movies.map(function(movie){
    return movie.title;
})

console.log(titles)


