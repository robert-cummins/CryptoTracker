import React, { useState, useEffect } from 'react';

const Transactions = (props) => {
    return (

        <div class="md:container md:mx-auto">
            
            <h2 className="text-4xl font-normal text-center leading-normal mt-0 mb-4 text-lime-500 font-VT233">Transactions</h2>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5">
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Date</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Crypto</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Amount</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Price</h4>
                <h4 className=" font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Action</h4>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
            <div className=" border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5 ">
                <h4 className="font-normal sm:text-center leading-normal mt-3  text-white align-middle">13/10/2021</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">Bitcoin</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">0.002342</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-3 text-white">NZ$124.23</h4>
                <div className="sm:grid sm:grid-cols-2 gap-2">
                    <button class="w-20 h-7 bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 rounded-full mx-4 mt-1">
                        Edit
                    </button>
                    <button class="w-20 h-7 bg-red-700 hover:bg-red-900 text-white font-bold px-4 rounded-full mx-4 mt-1 ">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
};


export default Transactions;