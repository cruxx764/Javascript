

// callTwice parameter accepts another function as argument - argument is then executed twice within statement 
function callTwice(func) {
    func();
    func();
}


// same as above - but uses loop to execute statement 10 times
function callTenTimes(f) { 
    for (let i =0; i <10; i++) {
        f()
    }
}

// function which we delcare and then pass as argument into functions above
function rollDie(){
    const roll = Math.floor(Math.random()*6) +1
    console.log(roll)
}

callTenTimes(rollDie)
callTwice(rollDie)


// Second example where 'makeMysteryFunc()' is called as an argument in the FE 'const func =makeMysteryFunc()'
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("You win a million dollars! ")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTD BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
            alert("STOP TRYING TO CLOSE THIS WINDOW")
        }
    }
};

const func = makeMysteryFunc()
console.log(func())


// funciton delcaration which has global scope 
function isBetween (min,max) {
// declare second function which calls global variable containing another function as argument
    return function (num) {
        // statement which checks if value of global variable/FE is more of less than values of parent funciton (min,max)
        return num >= min && num <= max; 
    }
}

// function expression which has global scope
const num = isBetween(25,100)


console.log(num(100))


