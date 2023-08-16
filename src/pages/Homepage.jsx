import React from 'react'
import { Container } from 'react-bootstrap'

function Homepage() {
    return (
        <Container>
            <h1>Welcome to my website!</h1>
            
            <p>This page should be protectd by a Private Route</p>
        </Container>
    )
}

export default Homepage
