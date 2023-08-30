import React, { useState, useEffect, useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Chart = ({ id }) => {

    const [coinData, setCoinData] = useState(null)
    const [formData, setFormData] = useState('Week')
    const [chartData, setChartData] = useState(null)
    const [apiInterval, setApiInterval] = useState({
        interval: 'd1',
        start: Date.now() - 691200000,
        end: Date.now()
    })

    console.log(coinData)

    const handleChange = (e) => {
        setFormData(() => e.target.value)
    }
    
    useEffect(() => {

        if (formData === 'Week') {
            setApiInterval({
                interval: 'd1',
                start: Date.now() - 691200000,
                end: Date.now()
            })
        }
        else if (formData === '24 hours') {
            setApiInterval({
                interval: 'h1',
                start: Date.now() - 86400000,
                end: Date.now()
            })
        }
        else {
            setApiInterval({
                interval: 'm15',
                start: Date.now() - 10800000,
                end: Date.now()
            })
        }
    }, [formData])
    
    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=${apiInterval.interval}&start=${apiInterval.start}&end=${apiInterval.end}`)
            .then(res => setCoinData(res.data.data))
            .catch(error => console.log('error', error));
    }, [apiInterval])

    useEffect(() => {
        if (coinData === null) {
            return
        }
        else {
            if (formData === 'Week') {
                setChartData({...chartData,
                    labels: coinData.map(day => (new Date(day.time)).toLocaleDateString()),
                    datasets: [{
                        label: 'Price',
                        data: coinData.map(day => day.priceUsd),
                        borderColor: coinData[coinData.length -1].priceUsd > coinData[0].priceUsd ? 'green' : 'red'
                    }]
                }
                )
            }
            else {
                setChartData({ ...chartData,
                    labels: coinData.map(day => (new Date(day.time)).toLocaleTimeString()),
                    datasets: [{
                        label: 'Price',
                        data: coinData.map(day => day.priceUsd),
                        borderColor: coinData[coinData.length -1].priceUsd > coinData[0].priceUsd ? 'green' : 'red'
                    }]
                }
                )
            }
        }
    }, [coinData])


    return (
        <Row className='align-items-center'>
            {chartData === null ?
                <h2>Loading</h2>
                :
                <Col lg={9}>
                    <Line className="chart" data={chartData} />
                </Col>
            }
            <Col lg={3}>
                <Form.Group className="mb-3 text-center">
                    <Form.Label>Past</Form.Label>
                    <Form.Select onChange={handleChange} className='bg-dark text-light'>
                        <option >Week</option>
                        <option >24 hours</option>
                        <option >3 hours</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    )
}

export default Chart