import React from 'react'
import Coins from '../components/Coins'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Watchlist({coins, favorites, setFavorites}) {
    return (  
        <div className='d-flex flex-column align-items-center'>
            <Container style={{ color: '#4655df' }} className='shadow rounded-lg p-3 mt-3 bg-dark'>
                <Row className='flex-row  align-items-center text-bg-dark'>
                    <Col lg={1}></Col>
                    <Col lg={1}>Rank </Col>
                    <Col lg={1}>Symbol</Col>
                    <Col lg={3}>Name</Col>
                    <Col lg={2}>Price</Col>
                    <Col lg={2}>Market Cap</Col>
                    <Col lg={1}>Supply</Col>
                    <Col className='text-center' lg={1}>Change (24Hr)</Col>
                </Row>
                    {favorites.map(fav => coins.map(coin => coin.name === fav ? <Coins key={coin.id} coin={coin} favorites={favorites} setFavorites={setFavorites}/> : null))}
            </Container>
        </div>
    )
}

export default Watchlist
