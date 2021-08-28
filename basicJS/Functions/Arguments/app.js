// //value which is passed in as an input to a function
function greet(idiotPerson) {
    console.log(`firstName is: ${idiotPerson}`)
};

console.log(greet('Evlis'));

function rant(message){
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
};

console.log(rant("I hate beets"))

function greet(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0].toUpperCase()}.`)
};

console.log(greet('george', 'clooney'));


function repeat(name, times) {
    console.log(name,times)
    let result = '';
    for (let i = 0; i < times; i++) {
        result += name;
    }
    console.log(result);
}

console.log(repeat('$', 10));

function isSnakeEyes(value1,value2) {
    if (value1 === 1 && value2 === 1){
        console.log("Snake Eyes!")
    } else {
        console.log('Not Snake Eyes!')
    }
}
console.log(isSnakeEyes(1,1));
console.log(isSnakeEyes(1,5));
console.log(isSnakeEyes(4,5));