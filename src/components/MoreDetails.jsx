import React from 'react'
import Chart from './Chart'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const MoreDetails = ({coin, numberShortener}) => {
    const { id, image, name, high_24h, low_24h, total_volume, price_change_24h } = coin

  return (
    <>
        <h3 className='text-center'>{name} <img style={{maxWidth:'2.5vw'}} src={image}/></h3>
        <Row className='align-items-center'>
            <Col lg={4}>
                 <Card style={{background:'rgb(65, 65, 105, 0.1)'}} className='text-light p-2 rounded border-0'>
                    <p style={{color:'#4655df'}}>Price Low (24hr): <span className='text-light'>${numberShortener(low_24h)}</span></p>
                    <p style={{color:'#4655df'}}>Price High (24hr): <span className='text-light'>${numberShortener(high_24h)}</span></p>
                    <p style={{color:'#4655df'}}>Volume (24hr): <span className='text-light'>${numberShortener(total_volume)}</span></p>
                    <p style={{color:'#4655df'}}>Price Change (24hr): <span className='text-light'>${numberShortener(price_change_24h)}</span></p>
                 </Card>
            </Col>
            <Col lg={8}>
                <Chart id={id} name={name} />
            </Col>
        </Row>
    </>
  )
}

export default MoreDetails