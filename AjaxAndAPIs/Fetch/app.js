
// The newer way of makling requestes via JS
// Supports promises
// Not supported in IE



// Verbose 'Promise version' 
//creates function with promise to return data from endpoint
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')

//     //passes that data into param 'res' which is then passed as an argument into a function which converts the data to JSON object  
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     // res.json() is asynchronous and returns a Promise object that resolves to a JavaScript object. 
//     .then(data => {
//         console.log("DATA PARSED...", data)
//         console.log(`$${data.ticker.price}`)
//     })
//     .catch(e => {
//         console.log("OH NO! ER")
//     });


// Same result, but using the 'async' keyword - Much cleaner & concise syntax 
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price)
    } catch {
        console.log("OH NO, ERROR!")
    }
}

