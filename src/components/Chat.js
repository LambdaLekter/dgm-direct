import React, {useEffect, useRef} from "react";
import MessageItem from "./MessageItem";
import MessageBar from "./MessageBar";
import axios from "axios";
import '../style/Chat.css'

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from "react-bootstrap";

export default function Chat({messages, setMessages, loggedUser, receiver, friendless}) {
    const chatRef = useRef(null);
    let firstScroll = false

    const scrollToBottom = () => {
        if (chatRef.current) {
            if(!firstScroll) {
                chatRef.current.scrollIntoView({ block: 'end' });
                firstScroll = true
            } else {
                chatRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
                firstScroll = true
            }
        }
    };

    const sendMessage = (event) => {
        event.preventDefault()
        const msgInput = document.getElementById("message-bar-input")
        const msgText = msgInput.value
        const currentDate = Date.now()

        const message = {
            author: loggedUser,
            receiver: receiver,
            text: msgText,
            time: currentDate
        };

        // Controllo per inviare un messaggio solo qualora il campo di testo contenga qualcosa
        if (msgText !== "") {
            axios.post('http://localhost:3001/api/messages/addMessage', message)
                .then(res => {
                    console.log("Messaggio creato con successo")
                })
                .catch(error => {
                    console.error(error);
                });
            setMessages([...messages, message])
            msgInput.value = ""
            scrollToBottom()
        }
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    return (
        <Container fluid>
            <Row>
                <Col ref={chatRef}>
                    {friendless ?
                        (<div id="friendless-message">
                            Aggiungi un amico per iniziare a chattare!
                        </div>) :
                        (<div id="messages">
                            {messages.map((message, idx) => {
                                let side = message.author === loggedUser ? "right" : "left"
                                return <MessageItem key={"msg" + idx} message={message} side={side}/>
                            })}
                        </div>)
                    }
                    { !friendless && <div id="message-bar"> <MessageBar submitHandler={sendMessage}/> </div> }
                </Col>
            </Row>
        </Container>
    )
}