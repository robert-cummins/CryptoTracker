import React, { useEffect } from 'react';
import UserAPI from '../api/UserAPI';


const Holdings = () => {

    const [transactions, setTransactions] = React.useState([])
    const [holdings, setHoldings] = React.useState({})

    useEffect(() => {
        UserAPI.getUserById("37").then(response => {
            setTransactions(response.data.transactions)
            let holdingsObj = {}

            transactions.map(transaction => {
                let coin = { totalSpent: 0, amount: 0 }
                if (!(transaction.crypto in holdingsObj)) {
                    coin.amount = transaction.amount
                    coin.totalSpent = transaction.price
                    holdingsObj[transaction.crypto] = coin
                } else {
                    holdingsObj[transaction.crypto].amount += transaction.amount
                    holdingsObj[transaction.crypto].totalSpent += transaction.price
                }
            })
            setHoldings(holdingsObj)
            Object.keys(holdings).map(coin => {
                console.log(coin)
            })

        })

    }, [])

    return (
        <div className="md:container md:mx-auto">
            <div className="md:container md:mx-auto">
                <h2 className="gap-2 border-b border-lime-500 text-4xl font-normal text-center leading-normal pb-4 mt-4 sm:mt-8 mb-4 text-lime-500 font-VT233">HOLDINGS</h2>
            </div>
            
            {Object.keys(holdings).map((coin) => {
                return (
                    // <div>
                    //     {/* <h1 className='text-lime-500'>Hello</h1> */}
                    //     <p className='text-lime-500'>{coin}</p>
                    //     <p className='text-lime-500'>{holdings[coin].amount}</p>
                    //     <p className='text-lime-500'>{holdings[coin].totalSpent}</p>
                    // </div>
                    <div key={coin} className="grid grid-cols-3 border-b border-lime-500  w-full sm:grid sm:grid-cols-3 sm:gap-3">
                        {/* <div className="sm:grid sm:grid-cols-2 sm:gap-2"><img className="object-scale-down h-12 w-12 mx-auto pt-4" src={crypto.image}/><h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{crypto.name}</h4></div> */}
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{coin}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">${holdings[coin].totalSpent}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{+holdings[coin].amount.toFixed(5)}</h4>
                        
                    </div>
                )
            })}
        </div>


    )
};


export default Holdings;