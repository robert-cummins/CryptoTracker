import axios from "axios"

const TRANSACTIONS_REST_API_URL = 'http://localhost:8080/api/v1/user/'

class UserAPI {
    
    getUserById (id){
        return axios.get(TRANSACTIONS_REST_API_URL + id)
    }
}

export default new UserAPI()