import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

export default function DoubleSidebar() {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <Sidebar />
                </Col>
                <Col md={6}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    );
};