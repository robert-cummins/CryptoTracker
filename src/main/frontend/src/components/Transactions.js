import React, { useEffect } from 'react';
import UserAPI from '../api/UserAPI';
import TransactionsAPI from '../api/TransactionsAPI';
import DeleteModal from './DeleteModal';

const Transactions = (props) => {

    const [transactions, setTransactions] = React.useState([])
    const [showDeleteModal, setShowDeleteModal] = React.useState(false)
    const [transactionId, setTransactionId] = React.useState(null)

    useEffect(() => {
        UserAPI.getUserById("37").then(response => {
            setTransactions(response.data.transactions)
        })

    }, [])

    const showDeleteWarning = (e) => {
        setShowDeleteModal(true)
        const id = e.target.value.toString()
        setTransactionId(id)
    }

    const hideDeleteWarning = () => {
        setShowDeleteModal(false)
    }

    const deleteTransaction = () => {
        
        TransactionsAPI.deleteTransaction(transactionId).then(response => {
            console.log(response.data)
            UserAPI.getUserById("37").then(response => {
                setTransactions(response.data.transactions)
            })
        })
        setShowDeleteModal(false)
    }

    return (

        <div className="md:container md:mx-auto">
            {showDeleteModal &&
                <DeleteModal deleteTransaction={deleteTransaction} hideDeleteWarning={hideDeleteWarning}/>
            }

            <h2 className="gap-2 border-b border-lime-500 text-4xl font-normal text-center leading-normal pb-4 mt-4 sm:mt-8 mb-4 text-lime-500 font-VT233">TRANSACTIONS</h2>
            <div className="hidden border-b border-lime-500  w-full sm:grid sm:grid-cols-5 gap-5">
                <h4 className="invisible sm:visible font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Date</h4>
                <h4 className="invisible sm:visible font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Crypto</h4>
                <h4 className="invisible sm:visible font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Amount</h4>
                <h4 className="invisible sm:visible font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Price</h4>
                <h4 className="invisible sm:visible font-normal sm:text-center leading-normal mt-0 mb-2 text-lime-500">Action</h4>
            </div>
            {transactions.map(transaction => {
                return (
                    <div key={transaction.id} className="grid grid-cols-2 border-b border-lime-500  w-full sm:grid sm:grid-cols-5 sm:gap-5">
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4  text-white "><p className="visible sm:invisible text-lime-500">Date</p>{transaction.created}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white"><p className="visible sm:invisible text-lime-500">Crypto</p>{transaction.crypto}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white"><p className="visible sm:invisible text-lime-500">Amount</p>{transaction.amount}</h4>
                        <h4 className="font-normal text-center leading-normal mt-5 mb-4 text-white"><p className="visible sm:invisible text-lime-500">Price</p>{transaction.price}</h4>
                        <button onClick={showDeleteWarning} value={transaction.id} className="col-span-2 sm:col-span-1 w-17 h-7 bg-lime-600 hover:bg-lime-700 text-white font-bold px-4 rounded-full  sm:text-center m-auto mb-4">
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
};


export default Transactions;