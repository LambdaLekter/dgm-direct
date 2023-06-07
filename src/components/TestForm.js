import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function TestForm() {
    return (
        <div className="bg-primary d-flex align-items-center vh-100">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6} lg={4}>
                        <Form className="bg-white p-4">
                            <h3>Login</h3>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Sign in
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TestForm;