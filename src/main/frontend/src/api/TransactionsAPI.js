import axios from "axios"

const TRANSACTIONS_REST_API_URL = 'http://localhost:8080/api/transaction'

class TransactionsAPI {
    
    getUsers(){
       return axios.get(TRANSACTIONS_REST_API_URL)
    }
}

export default new TransactionsAPI()