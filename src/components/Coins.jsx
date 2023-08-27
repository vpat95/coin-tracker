import React,{useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MoreDetails from './MoreDetails'
import { AiFillStar } from "react-icons/ai";
import { useAuth } from '../context/AuthContext';



function Coins({ coin, favorites, setFavorites }) {

    const {user} = useAuth()

    const handleClick = () =>{
        if(!!favorites.find(fav => fav === coin.name)){
            setFavorites(() => favorites.filter(fav => fav !== coin.name))
        }
        else{
            setFavorites(() => [...favorites, coin.name])
        }
    }


    const { rank, symbol, name, priceUsd, marketCapUsd, supply, changePercent24Hr } = coin
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
            return new Intl.NumberFormat('en-US').format((num))
        }
    }


    return (
        <>
            <Row style={{cursor:'pointer'}} className='text-light shadow rounded-pill flex-row py-1 my-2 coin'>
                {user ? (
                    <>
                        <Col lg={1}><AiFillStar fill={favorites.find(fav => fav === coin.name)? '#dfbb46' : 'white'} onClick={handleClick}/></Col>
                        <Col lg={1} onClick={() => setDetails(!details)}>{rank}</Col>
                        <Col lg={1} onClick={() => setDetails(!details)}>{symbol.toUpperCase()}</Col>
                        <Col lg={3} onClick={() => setDetails(!details)}><img className='symbol' src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={name}/> {name}</Col>
                        <Col lg={2} onClick={() => setDetails(!details)}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceUsd)}</Col>
                        <Col lg={2} onClick={() => setDetails(!details)}>{`$${numberShortener(marketCapUsd)}`}</Col>                
                        <Col lg={1} onClick={() => setDetails(!details)}>{numberShortener(supply)}</Col>
                        {changePercent24Hr === 0 
                        ? 
                        <Col className='text-center' onClick={() => setDetails(!details)} lg={1} style={{ color: 'black' }}>{`${numberShortener(changePercent24Hr)} %`}</Col> 
                        : 
                        changePercent24Hr < 0 
                        ?
                        <Col className='text-center' onClick={() => setDetails(!details)} lg={1}  style={{ color: 'red' }}>{`${numberShortener(changePercent24Hr)} %`}</Col>
                        :
                        <Col className='text-center' onClick={() => setDetails(!details)} lg={1}  style={{ color: 'green' }}>{`${numberShortener(changePercent24Hr)} %`}</Col>
                        }
                    </>
                        )
                    : (

                    <>
                        <Col lg={1}></Col>
                        <Col lg={1} onClick={() => setDetails(!details)}>{rank}</Col>
                        <Col lg={1} onClick={() => setDetails(!details)}>{symbol.toUpperCase()}</Col>
                        <Col lg={3} onClick={() => setDetails(!details)}><img className='symbol' src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={name}/> {name}</Col>
                        <Col lg={2} onClick={() => setDetails(!details)}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceUsd)}</Col>
                        <Col lg={2} onClick={() => setDetails(!details)}>{`$${numberShortener(marketCapUsd)}`}</Col>                
                        <Col lg={1} onClick={() => setDetails(!details)}>{numberShortener(supply)}</Col>
                        {changePercent24Hr === 0 
                        ? 
                        <Col className='text-center' onClick={() => setDetails(!details)} lg={1} style={{ color: 'black' }}>{`${numberShortener(changePercent24Hr)} %`}</Col> 
                        : 
                        changePercent24Hr < 0 
                        ?
                        <Col className='text-center' onClick={() => setDetails(!details)} lg={1}  style={{ color: 'red' }}>{`${numberShortener(changePercent24Hr)} %`}</Col>
                        :
                        <Col className='text-center' onClick={() => setDetails(!details)} lg={1}  style={{ color: 'green' }}>{`${numberShortener(changePercent24Hr)} %`}</Col>
                        }
                    </>
                    )
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