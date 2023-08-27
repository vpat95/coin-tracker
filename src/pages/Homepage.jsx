import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Coins from '../components/Coins'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {HiArrowsUpDown} from 'react-icons/hi2'

function Homepage({coins, reverse, setReverse, favorites, setFavorites, handleMoreClick}) {
    const [search, setSearch] = useState('')

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) )

    const handleReverse = () =>{
        setReverse(() => !reverse)
    }

    return (
        <>
            <Row className='pt-3'>
                <Col lg={{span:2, offset:9}}>
                    <Form.Group className=" ">
                        <Form.Control className='bg-dark text-light border-0 border-bottom rounded-0' onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search" />
                    </Form.Group>
                </Col>
            </Row>
            <Container style={{ color: '#4655df' }} className='shadow rounded-lg p-3 mt-3 bg-dark'>
                <Row className='flex-row  align-items-center'>
                    <Col lg={1}></Col>
                    <Col lg={1}>Rank <HiArrowsUpDown style={{cursor:'pointer'}} onClick={handleReverse} /></Col>
                    <Col lg={1}>Symbol</Col>
                    <Col lg={3}>Name</Col>
                    <Col lg={2}>Price</Col>
                    <Col lg={2}>Market Cap</Col>
                    <Col lg={1}>Supply</Col>
                    <Col className='text-center' lg={1}>Change (24Hr)</Col>
                </Row>
                {filteredCoins.map(coin => <Coins favorites={favorites} setFavorites={setFavorites}  key={coin.id} coin={coin} />)}
                {coins.length < 100 ? (
                <div className='d-flex justify-content-center'>
                    <Button onClick={handleMoreClick}>View More</Button>
                </div>
                )
                :
                null
                }
            </Container>
        </>
    )
}

export default Homepage


