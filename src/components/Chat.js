import MessageItem from "./MessageItem";
import MessageBar from "./MessageBar";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from "react-bootstrap";

export default function Chat({messages, setMessages, loggedUser, receiver, friendless}) {
    const sendMessage = (event) => {
        event.preventDefault()
        const msgInput = document.getElementById("message-bar-input")
        const msgText = msgInput.value

        const message = {
            author: loggedUser,
            receiver: receiver,
            text: msgText,
            time: Date.now()
        };


        if (msgText !== "") {
            // * Controllo per inviare un messaggio solo qualora il campo di testo contenga qualcosa

            axios.post('http://localhost:3001/api/messages/addMessage', message)
                .then(res => {
                    console.log("Messaggio creato con successo")
                    console.log(res.data)
                })
                .catch(error => {
                    console.error(error);
                });

            msgInput.value = ""
            setMessages([...messages, {text: msgText, author: loggedUser}])
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    { friendless ?
                        ( <div id="friendless-message">Aggiungi un amico per cominciare a chattare!</div> )
                        : ( <div id="messages">
                                { messages.map((message, idx) => {
                                    let side = message.author === loggedUser ? "right" : "left"
                                    return <MessageItem key={"msg" + idx} message={message} side={side} />
                                } ) }
                            </div>
                        )
                    }

                    <div id="message-bar">
                        <MessageBar submitHandler={sendMessage}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}