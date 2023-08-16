
import React,{useRef, useEffect} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const Signup = () => {

    const {user, registerUser} = useAuth()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const passwordConfirm = passwordConfirmRef.current.value

        if(password !== passwordConfirm){
            alert('Passwords do not match!')
            return
        } 

        const userInfo = {name, email, password, passwordConfirm}
        registerUser(userInfo)
    }

    return (
       <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                <   Form.Group id="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required/>
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button type="submit" className='w-100 mt-3'>Sign Up</Button>
                </Form>
                <p className='w-100 text-center mt-2'>Already have an account? <Link to='/login'>Log in</Link></p>
            </Card.Body>
        </Card>
       </>
    )
}
 

export default Signup