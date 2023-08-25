import React from 'react'
import Chart from './Chart'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const MoreDetails = ({coin, numberShortener}) => {
    const { id, image, name, high_24h, low_24h } = coin

  return (
    <>
        <h3 className='text-center'>{name} <img style={{maxWidth:'2.5vw'}} src={image}/></h3>
        <Row>
            <Col lg={4}>
                 <Card style={{background:'rgb(65, 65, 105, 0.1)'}} className='text-light p-2 rounded border-0'>
                    <p>Price Low (24hr): ${numberShortener(low_24h)}</p>
                    <p>Price High (24hr): ${numberShortener(high_24h)}</p>

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