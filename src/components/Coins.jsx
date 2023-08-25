import React,{useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MoreDetails from './MoreDetails'


function Coins({ coin }) {

    const { market_cap_rank, symbol, image, name, current_price, market_cap, circulating_supply, price_change_percentage_24h } = coin
    const [details, setDetails] = useState(false)

    function numberShortener(num) {
        if (num > 1000000000000) {
            return `${new Intl.NumberFormat('en-US').format((num / 1000000000000).toFixed(2))}t`
        }
        else if (num > 1000000000) {
            return `${new Intl.NumberFormat('en-US').format((num / 1000000000).toFixed(2))}b`
        }
        else if (num > 1000000) {
            return `${new Intl.NumberFormat('en-US').format((num / 1000000).toFixed(2))}m`
        }
        else if (num > 100000) {
            return `${new Intl.NumberFormat('en-US').format((num / 1000).toFixed(2))}k`
        }
        else {
            return new Intl.NumberFormat('en-US').format((num).toFixed(2))
        }
    }


    return (
        <>
            <Row onClick={() => setDetails(!details)} style={{cursor:'pointer'}} className='text-light shadow rounded-pill flex-row py-1 my-2 coin'>
                <Col lg={1}>{market_cap_rank}</Col>
                <Col lg={1}>{symbol.toUpperCase()}</Col>
                <Col lg={3}><img className='symbol' src={image} /> {name}</Col>
                <Col lg={2}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(current_price)}</Col>
                <Col lg={2}>{`$${numberShortener(market_cap)}`}</Col>                
                <Col lg={1}>{numberShortener(circulating_supply)}</Col>
                {price_change_percentage_24h === 0 
                ? 
                <Col className='text-center' lg={2} style={{ color: 'black' }}>{`${numberShortener(price_change_percentage_24h)} %`}</Col> 
                : 
                price_change_percentage_24h < 0 
                ?
                <Col className='text-center' lg={2}  style={{ color: 'red' }}>{`${numberShortener(price_change_percentage_24h)} %`}</Col>
                :
                <Col className='text-center' lg={2}  style={{ color: 'green' }}>{`${numberShortener(price_change_percentage_24h)} %`}</Col>
                }
            </Row>
            {!!details ? (
                <Row>
                    <Col>
                        <MoreDetails coin={coin} numberShortener={numberShortener}/>
                    </Col>
                </Row>
            )
                :
                null
            }
        </>
    )
}

export default Coins