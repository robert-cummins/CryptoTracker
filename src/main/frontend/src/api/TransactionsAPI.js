import axios from "axios"

const TRANSACTIONS_REST_API_URL = 'http://localhost:8080/api/v1/transaction/'

class TransactionsAPI {
    
    deleteTransaction(id){
       return axios.delete(TRANSACTIONS_REST_API_URL + id)
    }
}

export default new TransactionsAPI()