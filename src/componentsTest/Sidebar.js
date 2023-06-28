import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Sidebar() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
    );
};