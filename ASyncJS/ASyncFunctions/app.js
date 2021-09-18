

// aSync

// async function hello() {

// }


//async keyword automatically creates a promise, which will resolve or reject your function 
// const sing = async () => {
//     throw "OH NO, PROBLEM"
//     return 'LA LA LA LA'
// }
//you can resolve/return your result - or throw an error 

// sing()
//     .then((data) => {
//         console.log("Promise resolved with:", data)
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED!")
//         console.log(err)
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME'
    throw 'INVALID PASSWORD'
}

login('fwfwfe', 'corgifeetarecute')
    .then(msg => {
        console.log('LOGGED IN!')
        console.log(msg)
    })
    .catch(err => {
        console.log('ERROR!')
        console.log(err)
    })

//aWait 

const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
};


//before await 
delayedColorChange('red', 1000)
    .then(() => delayedColor('orange', 1000))
    .then(() => delayedColor('yellow', 1000))
    .then(() => delayedColor('green', 1000))
    .then(() => delayedColor('purple', 1000))

;


//with await 
// '.then' no longer required - await keyword tells the function to execute only once the promise has been resolved 
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('orange', 1000)
    return "ALL DONE"
}

rainbow().then(() => console.log("END OF RAINBOW"));

//when used inside of functions, 'await' can replace '.then' by pausing the next action until the promise has been fullfilled
async function printRainbow() {
    await rainbow(); 
    console.log("END OF RAINBOW!")
}

printRainbow(); 


//Handling errors: 

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
};


//use try/catch to handle errors with async functions 
async function makeTwoRequests () {
    try { 
    let data1 = await fakeRequest('/page1');
    console.log(data1);
    let data2 = await fakeRequest('/page2');
    console.log(data2);
    } catch (e) {
        console.log("Caught an error!")
        console.log("Error is:", e)
    }
}

