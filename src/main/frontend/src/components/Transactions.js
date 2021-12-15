import React from 'react'

const Transactions = (props) => {
    return (

        <div class="md:container md:mx-auto">
            {/* <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Name</th>
					<th class="p-3 text-left">Email</th>
					<th class="p-3 text-left" width="110px">Actions</th>
				</tr>
				
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
				</tr>
				
			</tbody>
		</table> */}
            <h2 className="text-4xl font-normal text-center leading-normal mt-0 mb-4 text-white">Transactions</h2>
            <div className=" border-b-2 border-white  w-full sm:grid sm:grid-cols-5 gap-5">
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-white">Date</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-white">Crypto</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-white">Amount</h4>
                <h4 className="font-normal sm:text-center leading-normal mt-0 mb-2 text-white">Price</h4>
                <h4 className=" font-normal sm:text-center leading-normal mt-0 mb-2 text-white">Action</h4>
            </div>
            <div className=" border-b-2 border-white  w-full sm:grid sm:grid-cols-5 gap-5 ">
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
            <div className=" border-b-2 border-white  w-full sm:grid sm:grid-cols-5 gap-5 ">
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
            <div className=" border-b-2 border-white  w-full sm:grid sm:grid-cols-5 gap-5 ">
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
            <div className=" border-b-2 border-white  w-full sm:grid sm:grid-cols-5 gap-5 ">
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