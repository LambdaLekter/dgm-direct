import React, {useState, useEffect, useRef} from "react";
import MessageItem from "./MessageItem";
import MessageBar from "./MessageBar";
import axios from "axios";
import '../style/Chat.css'
import '../style/Navbar.css'

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row, Navbar} from "react-bootstrap";

export default function Chat({messages, setMessages, loggedUser, receiver, friendless}) {
    const chatRef = useRef(null);
    const [firstScroll, setFirstScroll] = useState(false);

    const scrollToBottom = () => {
        if (chatRef.current) {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight
            });
        }
    }

    const sendMessage = (event) => {
        if (event) event.preventDefault()
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
                <Col style={{padding: 0}}>
                    {!friendless &&
                        <Navbar className="navbar-chat">
                            <div className="user">{receiver}</div>
                        </Navbar>
                    }

                    <div id="chat-wrapper"  onContextMenu={e => e.preventDefault()}>
                        {friendless ?
                            (<div id="friendless-message">
                                Aggiungi un amico per iniziare a chattare!
                            </div>) :
                            (<div id="messages" ref={chatRef}>
                                {messages.map((message, idx) => {
                                    let side = message.author === loggedUser ? "right" : "left"
                                    return <MessageItem key={"msg" + idx} message={message} side={side}/>
                                })}
                            </div>)
                        }
                        {!friendless && <div id="message-bar"><MessageBar submitHandler={sendMessage}/></div>}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}