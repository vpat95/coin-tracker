import React, { useState, useEffect, useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'
import chart_data from '../chart_data'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Chart = ({ name, id }) => {
    console.log(name, id)

    const [coinData, setCoinData] = useState(null)
    const [formData, setFormData] = useState('Daily')
    
    console.log(formData)

    const handleChange = (e) =>{
       setFormData(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${id.toLowerCase()}/history?interval=d1&start=${Date.now() - 691200000}&end=${Date.now()}`)
            .then(res => setCoinData(res.data.data))
            .catch(error => console.log('error', error));
    }, [])


    const chartData = useMemo(() => {
        if (coinData === null) {
            return
        }
        else {
            return {
                labels: coinData.map(day => (new Date(day.time)).toLocaleDateString()),
                datasets: [{
                    label: 'Price',
                    data: coinData.map(day => day.priceUsd)
                }]
            }
        }
    }
        , [coinData])


    return (
        <Row>
            {coinData === null ?
                <h2>Loading</h2>
                :
                <Col lg={9}>
                    <Line className="chart" data={chartData} />
                </Col>
            }
            <Col lg={3}>
                <Form.Group className="mb-3 text-center">
                    <Form.Label>Interval</Form.Label>
                    <Form.Select onChange={handleChange} className='bg-dark text-light'>
                        <option >Daily</option>
                        <option >Weekly</option>
                        <option >Hourly</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default Chart