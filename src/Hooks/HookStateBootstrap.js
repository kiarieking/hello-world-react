import React, {useState} from 'react'
import {Button, InputGroup, Form, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function HookStateBootstrap() {
    const initialState = {email:'', password:''}
    const [detail, setdetail] = useState(initialState)    

    const clickHandler=()=>{
        let emailw = detail.email
        let passwordw = detail.password
        let detailw = emailw + " " + passwordw
        
    }
    return (
        <div>
            <h1>State object with hooks</h1>
            <Form className="w-25">
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' value={detail.email} onChange={(e)=>setdetail({...detail,email:e.target.value})}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control type='text' value={detail.password} onChange={(e)=>setdetail({...detail,password:e.target.value})}/>
                </Form.Group>
                <Button onClick={clickHandler}>Submit</Button>
            </Form>
            <h2>{detail.email}</h2>
            <h2>{detail.password}</h2>
        </div>
    )
}

export default HookStateBootstrap
