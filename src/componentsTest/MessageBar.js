/**
 * Il componente MessageBar permette di realizzare il campo input di testo che troviamo in basso nella
 * pagina della chat relativa a ciascun amico
 */

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Form, Button, InputGroup} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export default function MessageBar({submitHandler}) {

    return (
        <Form onSubmit={submitHandler}>
            <InputGroup>
                <Form.Control type="text" id="message-bar-input" placeholder="Scrivi un messaggio"/>
                <Button size="lg" type="submit">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </Button>
            </InputGroup>
        </Form>
    )
}