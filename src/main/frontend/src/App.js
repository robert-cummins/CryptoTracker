import './App.css';
import './components/Transactions'
import React, { useEffect } from 'react';
import Transactions from './components/Transactions';
import Crypto from './components/Crypto';

function App() {

  const [componentRendered, setComponentRendered] = React.useState("Transactions")

  const renderSwitch = (component) => {
    switch(component) {
      case "Transactions":
        return <Transactions/>;
      
      case "Crypto":
        return <Crypto/>;
    }
  }

  return (
    <div className="App">
      {renderSwitch(componentRendered)}
    </div>
  );
}

export default App;
