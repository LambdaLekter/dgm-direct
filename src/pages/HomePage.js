import logoBlu from "../img/logoBlu.png";
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import React from "react";
import '../style/HomePage.css'

export default function HomePage() {
    return (
        <Container className="container">
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6}>
                    <h1 className="text-center">Benvenuto nella HomePage</h1>
                    <img
                        src={logoBlu}
                        alt="Home"
                        className="img-fluid"
                        id="logoPic"
                    />
                    <div className="text-center mt-4">
                        <Link to="/signup">
                            <Button variant="primary">Registrazione</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="primary">Login</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}