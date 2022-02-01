export const calculateHoldings = (transactions) => {
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
    
    return holdingsObj
}