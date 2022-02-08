import React, { useEffect } from 'react';


const Holdings = (props) => {

    return (
        <div className="md:container md:mx-auto">
            <div className="md:container md:mx-auto">
                <h2 className="gap-2 border-b border-lime-500 text-4xl font-normal text-center leading-normal pb-4 mt-4 sm:mt-8 mb-4 text-lime-500 font-VT233">HOLDINGS</h2>
            </div>
            
            {props.holdings && Object.keys(props.holdings).map((coin) => {
                return (
                    
                    <div key={coin} className="grid grid-cols-3 border-b border-lime-500  w-full sm:grid sm:grid-cols-3 sm:gap-3">
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{coin}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">${props.holdings[coin].totalSpent}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white">{+props.holdings[coin].amount.toFixed(5)}</h4>
                        
                    </div>
                )
            })}
        </div>


    )
};


export default Holdings;