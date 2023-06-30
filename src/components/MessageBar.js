/**
 * Il componente MessageBar permette di realizzare il campo input di testo che troviamo in basso nella
 * pagina della chat relativa a ciascun amico
 */

import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button, InputGroup} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export default function MessageBar({submitHandler}) {
    const [text, setText] = useState("")
    const textInput = useRef(null)
    const maxInputHeight = 120

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.shiftKey) {
            console.log("Premuto Enter")
            // TODO: Permettere di inviare il messaggio, avviando quindi il submitHandler
        } else if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            console.log("Premuti Enter e Shift")
        }
    }

    const adjustInputHeight = () => {
        if (textInput.current && textInput.current.scrollHeight < maxInputHeight) {
            textInput.current.style.height = 'auto';
            textInput.current.style.height = `${textInput.current.scrollHeight}px`;
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <InputGroup>
                <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Scrivi un messaggio"
                    id="message-bar-input"
                    onKeyDown={handleKeyDown}
                    onChange={adjustInputHeight}
                    ref={textInput}
                />
                {/*<Form.Control*/}
                {/*    type="text"*/}
                {/*    id="message-bar-input"*/}
                {/*    placeholder="Scrivi un messaggio"*/}
                {/*    autoComplete="off"*/}
                {/*/>*/}
                <Button size="lg" type="submit">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </Button>
            </InputGroup>
        </Form>
    )
}