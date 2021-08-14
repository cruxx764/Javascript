// function add(x,y){
//     return x + y;
// }
// console.log(add(2,2));

// function check(x,y){
//     if (typeof x !=='number'|| typeof y !== 'number'){
//     return false;
//     }
//     return x + y;
// }

// console.log(check(2,6));

// function lastElement(array){
//     if(array.length !== 0){
//       return array[array.length - 1] 
//     } return null
// }


// // console.log(lastElement([]))

// // Solution 1
// function capitalize(word){
//     return `${word[0].toUpperCase()}`+ word.substring(1)
// }

// console.log(capitalize('eggplant'))

// //Solution 2
// function capitalize(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// console.log(capitalize('eggplant'))


// Solution 1
// function sumArray(array) {
//     let arraValue = 0
//     for (i of array) {
//         arraValue += array[i];
//     } return arraValue
// }


// Solution 2
// function sumArray(array){
//     return array.reduce(function(acc,val){
//         return acc + val;
//     })
// }

// console.log(sumArray([1,2,2]));

function returnDay(day){
    let days = [ null ,'Monday', 'Tuesday','Wednesday', 'Thursday','Friday','Saturday','Sunday']
    if(day < 1 || day > 7) {
    return days[0]
    } return days[day]
}
console.log(returnDay(55));