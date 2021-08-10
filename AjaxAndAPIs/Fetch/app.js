// fetch ('https://apo.cryptonator.com/api/ticket/btc-usd')
// .then(res => {
//     console.log("Response, Waiting to parse...", res)
//     res.json()
// })

// .then(data => {
//     console.log("Data Parsed...")
//     console.log(data.ticker.price)
// })
// .catch(e => {
//     console.log("Oh No! Error!", e)
// });

const fetchBitcoinPrice = async () => {
    const res = await fetch('https://api.cryptonator.com/api/ticker/eth-aud');
    const data = await res.json();
    console.log(data.ticker.price)
};


console.log(fetchBitcoinPrice())
