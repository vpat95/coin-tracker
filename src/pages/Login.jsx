import React,{useEffect, useRef, useState} from 'react'
import { useAuth } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Form, Button, Container} from 'react-bootstrap'

function Login() {
    const {user, loginUser} = useAuth()
    const [login, setLoginInfo] = useState({
        email: 'demo@demo.com',
        password: 'demo1234'
    })
    const navigate = useNavigate()


    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[])

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setLoginInfo({
            ...login,
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const email = login.email
        const password = login.password

        const userInfo = {email, password}
        loginUser(userInfo)
    }
    
    return (
        <Container
            className="d-flex mt-5 pt-5 justify-content-center" 
            style={{minHeight: "100vh"}}
        >
            <div className="w-100 d-flex flex-column" style={{maxWidth: '400px'}}>
                <Card style={{background:'black'}} className='text-light'>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Log In</h2>
                        <Form className="text-light" onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={handleChange} name='email' type="email" value={login.email} required/>
                            </Form.Group>
                            <Form.Group className="pt-2" id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleChange} name='password' type="password" value={login.password} required/>
                            </Form.Group>
                            <Button type="submit" className='w-100 mt-3' style={{background: '#4655df', border:'none'}}>Log In</Button>
                        </Form>
                        <p className='w-100 text-center mt-2'>Don't have an account? <Link style={{color: '#dfbb46', textDecoration: 'none'}} to='/signup'>Sign Up</Link></p>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Login

