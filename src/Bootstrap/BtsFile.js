import { Button, Alert, Breadcrumb, Card, Form, Container, Col, Row  } from 'react-bootstrap'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class BtsFile extends Component {
    render() {
        return (
            <div>
                <Container>
                    
                        <Form className='w-75 bg-light mb-auto'>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type='text' placeholder='enter your username'/>
                                    <Form.Text className='text-muted'>your data is safe with us.</Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' placeholder='enter your email'/>
                                    <Form.Text className='text-muted'>your data is safe with us.</Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>                            
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='enter your password'/>
                                    <Form.Text className='text-muted'>your data is safe with us.</Form.Text>
                                </Form.Group>
                            </Col>
                            <Button variant='secondary'>Login</Button>
                            </Row> 
                        </Form> 
                       
                </Container>
                <Card className='bg-dark mx-8 my-8'>
                    <Card.Img src='https://picsum.photos/id/1/50/50'/>
                    <Card.Body>
                        <Card.Title>
                            Card Title
                        </Card.Title>
                        <Card.Text>
                            This is the card text
                        </Card.Text>
                        <Button>Card button</Button>
                    </Card.Body>
                </Card>

                <Breadcrumb>
                    <Breadcrumb.Item>item 1</Breadcrumb.Item>
                    <Breadcrumb.Item active>item 2</Breadcrumb.Item>
                    <Breadcrumb.Item>item 3</Breadcrumb.Item>
                </Breadcrumb>

                <Alert variant='primary'>Bootstrap alert</Alert>

                <Button>Test Button</Button>
            </div>
        )
    }
}

export default BtsFile
