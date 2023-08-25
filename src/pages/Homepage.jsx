import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Coins from '../components/Coins'
import coin_data from '../coin_data'
import { Container } from 'react-bootstrap'

function Homepage() {
    const [coins, setCoins] = useState([])
    console.log(coins)


    useEffect(() => {
        setCoins(coin_data)
    }, [])

    return (
        <div className='all'>
            <Container style={{color: '#4655df'}} className='shadow rounded-lg p-3 mt-5 bg-dark'>
                    <Row className='flex-row  align-items-center'>
                            <Col lg={1}>Rank</Col>
                            <Col lg={1}>Symbol</Col>
                            <Col lg={3}>Name</Col>
                            <Col lg={2}>Price</Col>
                            <Col lg={2}>Market Cap</Col>
                            <Col lg={1}>Supply</Col>
                            <Col className='text-center' lg={2}>Change (24Hr)</Col>  
                    </Row>
                    {coins.map(coin => <Coins key={coin.id} coin={coin}/>)}
            </Container>
        </div>
    )
}

export default Homepage


//`https://api.coincap.io/v2/assets?limit=20`