import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Coins from '../components/Coins'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

function Homepage({coins, favorites, setFavorites}) {
    const [search, setSearch] = useState('')

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) )

    return (
        <div className='all'>
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
                    <Col lg={1}>Rank </Col>
                    <Col lg={1}>Symbol</Col>
                    <Col lg={3}>Name</Col>
                    <Col lg={2}>Price</Col>
                    <Col lg={2}>Market Cap</Col>
                    <Col lg={1}>Supply</Col>
                    <Col className='text-center' lg={1}>Change (24Hr)</Col>
                </Row>
                {filteredCoins.map(coin => <Coins favorites={favorites} setFavorites={setFavorites}  key={coin.id} coin={coin} />)}
            </Container>
        </div>
    )
}

export default Homepage


