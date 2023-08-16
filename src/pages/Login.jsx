import React,{useEffect, useRef} from 'react'
import { useAuth } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'

function Login() {
    const {user, loginUser} = useAuth()
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[])

    function handleSubmit(e){
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const userInfo = {email, password}
        loginUser(userInfo)
    }
    
    return (
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button type="submit" className='w-100 mt-3'>Log In</Button>
                </Form>
                <p className='w-100 text-center mt-2'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </Card.Body>
        </Card>
    )
}

export default Login
