import axios from "axios"


class CryptoAPI {
    
    getTopCryptosNZD(){
        console.log("here")
        return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    }
}

export default new CryptoAPI()