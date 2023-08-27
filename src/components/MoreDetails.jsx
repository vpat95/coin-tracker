import React from 'react'
import Chart from './Chart'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const MoreDetails = ({coin, numberShortener}) => {
    const { id, name, symbol, volumeUsd24Hr, vwap24Hr, maxSupply } = coin

  return (
    <>
        <h3 className='text-center'>{name} <img style={{maxWidth:'2.5vw'}} src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}/></h3>
        <Row className='align-items-center'>
            <Col lg={4}>
                 <Card style={{background:'rgb(65, 65, 105, 0.1)'}} className='text-light p-2 rounded border-0'>
                    <p style={{color:'#4655df'}}>Volume (24hr): <span className='text-light'>${numberShortener(volumeUsd24Hr)}</span></p>
                    <p style={{color:'#4655df'}}>VWAP (24hr): <span className='text-light'>${numberShortener(vwap24Hr)}</span></p>
                    <p style={{color:'#4655df'}}>Max Supply: <span className='text-light'>${numberShortener(maxSupply)}</span></p>
                 </Card>
            </Col>
            <Col lg={8}>
                <Chart id={id} />
            </Col>
        </Row>
    </>
  )
}

export default MoreDetails