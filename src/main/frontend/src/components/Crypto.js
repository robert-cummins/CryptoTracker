import React, { useEffect } from 'react';
import CryptoAPI from '../api/CryptoAPI';


const Crypto = () => {

    const [cryptos, setCryptos] = React.useState([])

    useEffect(() => {
        CryptoAPI.getTopCryptosNZD().then(res => setCryptos(res.data))
    }, [])

    return (
        <div className="md:container md:mx-auto">
            <h2 className="gap-2 border-b border-lime-500 text-4xl font-normal text-center leading-normal pb-4 mt-4 sm:mt-8 mb-4 text-lime-500 font-VT233">Crypto</h2>

            {cryptos.map(crypto => {
                return (
                    <div key={crypto.id} className="grid grid-cols-3 border-b border-lime-500  w-full sm:grid sm:grid-cols-3 sm:gap-3">
                        {/* <h4 className="font-normal text-center leading-normal mt-5 mb-4  text-white ">{crypto.market_cap_rank}</h4> */}
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2"><img className="object-scale-down h-12 w-12 mx-auto pt-4" src={crypto.image}/><h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{crypto.name}</h4></div>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">${crypto.current_price}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{crypto.price_change_percentage_24h}%</h4>
                        
                    </div>
                )
            })}
        </div>

    )
};


export default Crypto;