const scores = [23213,123123,345,4321,543543,1231,45647658,23423423]

const highScore = scores[0]
const secondHighScore = scores[1];


// Shorter clean syntax to 'unpack' :
// -values from arrays
// -Properties from objects 
// Into distince variables 
const [gold, silver] = scores; 
console.log(gold)
// 23213