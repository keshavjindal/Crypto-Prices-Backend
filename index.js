const axios = require('axios');

// let api = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
// api = "https://api.binance.com/api/v3/ticker/price"
// api = "https://api.binance.com/api/v3/ticker/price?symbol=BTCINR"

async function getAllPrices(){
    let api = "https://api.binance.com/api/v3/ticker/price"
    const res = await axios.get(api)
    let arr = res.data
    
    for(let i=0; i<arr.length; i++){
        let obj = res.data[i]
        let symbol = obj["symbol"]
        let price = obj["price"]

        if(symbol.includes("BTC")){
            console.log(symbol , price);
        }
    }
}

// one and two must be passed in CAPITAL LETTERS
async function getPairPrice(one, two){
    try{
        let api = "https://api.binance.com/api/v3/ticker/price?symbol=" + one + two
        const res = await axios.get(api)
        printPairPrice(res.data, one, two);
    }
    catch(err){
        // console.log(err);
        let api = "https://api.binance.com/api/v3/ticker/price?symbol=" + two + one
        const res = await axios.get(api)
        printPairPrice(res.data, two, one);
    }
}

function printPairPrice(obj, one, two){
    let symbol = obj["symbol"]
    let price = obj["price"]

    console.log(`1 ${one} = ${price} ${two}`);
}




getPairPrice("BTC" , "USDT")
getPairPrice("BTC" , "LTC")
getPairPrice("BTC" , "ADA")
getPairPrice("BTC" , "SOL")

