// function sum(){
//    return arguments.reduce((total,el) => total + el)
// }
// console.log(sum(223,23,34))
// The reduce method will not work on 'arguments' as its not an array 

function sum2(...nums){
return nums.reduce((total,el) => total + el)
}
console.log(sum2(3,4,5))
//  ... notation 'spread' now passes argument to num as array - which can now use an array method like .reduce


function raceResults(gold,silver,...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`Thanks to everyone else: ${everyoneElse}`)
}
console.log(raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis'));

