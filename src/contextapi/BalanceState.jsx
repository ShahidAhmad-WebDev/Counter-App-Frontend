import React, { useState } from 'react'
import balanceContext from './balanceContext'
function BalanceState({ children }) {

    const [name, setName] = useState("Komal Singh")

    const [balance, setBalance] = useState(547)

    // const obj = {
    //     name: name,
    //     balance: balance,
    //     setName: setName,
    //     setBalance: setBalance
    // }

    // const obj = { name, balance, setBalance, setName }

    return (
        <balanceContext.Provider value={{ name, balance, setBalance, setName }} >
            {children}
        </balanceContext.Provider>
    )
}

export default BalanceState
