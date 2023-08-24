import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinTable from '../components/CoinTable'

function Homepage() {
    const [coins, setCoins] = useState([])
    console.log(coins)

    async function getCoins() {
        let a = await fetch(`https://api.coincap.io/v2/assets`)
        let b = await a.json()
        setCoins(b.data)
    }

    useEffect(() => {
        let id = setTimeout(() => {
            getCoins()
        }, 2000);

        return () => clearTimeout(id)
    }, [coins])

    return (
        <div className='dark'>
            <CoinTable coins={coins} />
        </div>
    )
}

export default Homepage


//`https://api.coincap.io/v2/assets?limit=20`