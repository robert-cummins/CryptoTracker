import './App.css';
import './components/Transactions'
import React, { useEffect } from 'react';
import Transactions from './components/Transactions';
import Crypto from './components/Crypto';
import Holdings from './components/Holdings';
import UserAPI from './api/UserAPI';
import {calculateHoldings} from './utils/holdingsUtils'

function App() {

  const [componentRendered, setComponentRendered] = React.useState("Crypto")
  const [user, setUser] = React.useState({user: [], holdings: {}})
  
  useEffect(() => {
    
    getUser()

}, [])

const getUser = () => {
  UserAPI.getUserById("37")
    .then(response => {
      const holdingsObj = calculateHoldings(response.data.transactions)
      setUser({user: response.data, holdings: holdingsObj})
    })
}

  const renderSwitch = (component) => {
    switch(component) {
      case "Transactions":
        return <Transactions getUser={getUser} transactions={user.user.transactions}/>
      
      case "Crypto":
        return <Crypto/>

        case "Holdings":
          return <Holdings holdings={user.holdings}/>
    }
  }

  return (
    <div className="App">
      {renderSwitch(componentRendered)}
    </div>
  );
}

export default App;
